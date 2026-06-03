import os
import sys
import uuid
from typing import Optional, Tuple
from datetime import datetime
from dotenv import load_dotenv
load_dotenv()
from google import genai

# Import Rich CLI components for premium aesthetics
from rich.console import Console
from rich.panel import Panel
from rich.prompt import Prompt, Confirm
from rich.text import Text
from rich.table import Table
from rich.markdown import Markdown
from rich.status import Status
from rich.theme import Theme

# Load local libraries
sys.path.append(os.path.abspath(os.path.dirname(__file__)))
from trainer.memory import DatabaseMemory
from trainer.rag import BareMetalRAG
from trainer.agent import SocraticTrainerAgent
from evaluator.evaluator import SessionEvaluator
from challenges.registry import deploy_challenge

# Initialize Custom Rich Theme
custom_theme = Theme({
    "info": "bold cyan",
    "warning": "bold yellow",
    "danger": "bold red",
    "success": "bold green",
    "thinking": "italic dim cyan",
    "mentor": "bold bright_blue",
    "student": "bold bright_green"
})
console = Console(theme=custom_theme)

def display_welcome_banner():
    banner_text = """
███████  ██████   ██████ ██████   █████  ████████ ██  ██████ 
██      ██    ██ ██      ██   ██ ██   ██    ██    ██ ██      
███████ ██    ██ ██      ██████  ███████    ██    ██ ██      
     ██ ██    ██ ██      ██   ██ ██   ██    ██    ██ ██      
███████  ██████   ██████ ██   ██ ██   ██    ██    ██  ██████ 
                                                             
     █████  ██      ████████ ██████   █████  ██ ███    ██ ███████ ██████  
    ██   ██ ██         ██    ██   ██ ██   ██ ██ ████   ██ ██      ██   ██ 
    ███████ ██         ██    ██████  ███████ ██ ██ ██  ██ █████   ██████  
    ██   ██ ██         ██    ██   ██ ██   ██ ██ ██  ██ ██ ██      ██   ██ 
    ██   ██ ██         ██    ██   ██ ██   ██ ██ ██   ████ ███████ ██   ██ 
    """
    console.print(Panel(Text(banner_text, style="bold bright_blue"), border_style="cyan", subtitle="v1.0.0 - Bare-Metal AI Mentor"))

def run_indexing(rag: BareMetalRAG):
    """Automatically indexes local docs/ directory on startup."""
    docs_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "docs"))
    if not os.path.exists(docs_dir):
        os.makedirs(docs_dir)
        
    with console.status("[bold cyan]Updating local RAG database index...", spinner="dots"):
        rag.index_directory(docs_dir)
    console.print("[success]✔ Local documentation index synced with SQLite.[/]")

def start_new_session(memory: DatabaseMemory, agent_creator) -> Optional[Tuple[SocraticTrainerAgent, str]]:
    console.print("\n[info]--- Start a New Socratic Training Session ---[/]")
    
    # Prompt for Engineering Concept
    concepts = [
        "State Management in Agents",
        "Function Calling & Tool Routing",
        "RAG Optimization & Embeddings",
        "Memory Systems & Context Management"
    ]
    console.print("\nAvailable Engineering Concepts to Master:")
    for idx, c in enumerate(concepts, 1):
        console.print(f"  [bold cyan][{idx}][/] {c}")
        
    choice = Prompt.ask("\nSelect a concept", choices=[str(i) for i in range(1, len(concepts)+1)], default="1")
    concept_name = concepts[int(choice) - 1]
    
    # Prompt for Skill Level
    skill_level = Prompt.ask(
        "Select your experience level",
        choices=["Beginner", "Intermediate", "Advanced"],
        default="Intermediate"
    )
    
    # Generate unique Session ID
    session_id = f"sess_{datetime.now().strftime('%m%d_%H%M')}_{uuid.uuid4().hex[:4]}"
    
    # Save session metadata
    memory.create_session(session_id, concept_name, skill_level)
    
    # Deploy challenge files to workspace
    if deploy_challenge(concept_name):
        console.print(f"[success]✔ Challenge workspace populated for {concept_name} (workspace/).[/]")
    else:
        console.print("[warning]Could not deploy challenge workspace files. Generic workspace setup applied.[/]")
    
    # Initialize Agent
    agent = agent_creator(session_id)
    
    console.print(f"\n[success]✔ Session created: [bold cyan]{session_id}[/] ({concept_name} - {skill_level})[/]")
    return agent, session_id

def resume_past_session(memory: DatabaseMemory, agent_creator) -> Optional[Tuple[SocraticTrainerAgent, str]]:
    console.print("\n[info]--- Resume Past Session ---[/]")
    sessions = memory.get_active_sessions()
    
    if not sessions:
        console.print("[warning]No saved sessions found in SQLite. Start a new session first![/]")
        return None
        
    table = Table(title="Past Learning Sessions", border_style="cyan")
    table.add_column("Session ID", style="cyan")
    table.add_column("Concept", style="white")
    table.add_column("Difficulty", style="magenta")
    table.add_column("Started At", style="dim green")
    
    for sid, concept, lvl, start in sessions:
        table.add_row(sid, concept, lvl, start)
        
    console.print(table)
    
    session_choices = [s[0] for s in sessions]
    selected_sid = Prompt.ask("\nEnter the Session ID to resume", choices=session_choices, default=session_choices[0])
    
    agent = agent_creator(selected_sid)
    console.print(f"\n[success]✔ Resumed session: [bold cyan]{selected_sid}[/]. Loading chat context...[/]")
    return agent, selected_sid

def run_evaluation_audit(memory: DatabaseMemory):
    console.print("\n[info]--- Run Evaluation Audit ---[/]")
    sessions = memory.get_active_sessions()
    
    if not sessions:
        console.print("[warning]No saved sessions found in SQLite database to evaluate.[/]")
        return
        
    table = Table(title="Select Session to Audit", border_style="cyan")
    table.add_column("Session ID", style="cyan")
    table.add_column("Concept", style="white")
    table.add_column("Difficulty", style="magenta")
    
    for sid, concept, lvl, _ in sessions:
        table.add_row(sid, concept, lvl)
        
    console.print(table)
    
    session_choices = [s[0] for s in sessions]
    selected_sid = Prompt.ask("\nEnter the Session ID to audit", choices=session_choices, default=session_choices[0])
    
    try:
        evaluator = SessionEvaluator()
        with console.status(f"[bold yellow]Auditing trainer transcripts for session {selected_sid}...", spinner="bouncingBar"):
            report = evaluator.evaluate_session(selected_sid)
        
        console.print("\n" + "=" * 60)
        console.print(Markdown(report))
        console.print("=" * 60 + "\n")
    except Exception as e:
        console.print(f"[danger]Audit failed: {e}[/]")

def chat_loop(agent: SocraticTrainerAgent, session_id: str, memory: DatabaseMemory):
    # Retrieve configuration for showing thoughts
    show_thoughts = Confirm.ask("Would you like to display the Socratic Mentor's internal <thinking> reasoning steps during the session?", default=True)
    
    console.print("\n" + "="*80)
    console.print("[info]Chat initialized. Type [bold red]'exit'[/] or [bold red]'menu'[/] to return to main menu.[/]")
    console.print("[info]To test your solution, type code or questions directly. The agent can inspect your workspace files.[/]")
    console.print("="*80 + "\n")
    
    # If starting a new session, query history. If it is empty, seed initial prompt.
    history = memory.get_session_history(session_id)
    if not history:
        # Seed start sequence
        initial_trigger = "I am ready to begin. Please assess my skill level and introduce the challenge."
        with console.status("[bold bright_blue]Mentor is scoping challenge...", spinner="aesthetic"):
            turn = agent.generate_response(initial_trigger)
        
        if show_thoughts and turn["thinking"]:
            console.print(Panel(turn["thinking"], title="Mentor Thinking Process", border_style="dim cyan", style="thinking"))
        console.print(f"\n[mentor]Socratic Mentor:[/]\n{turn['response']}\n")

    while True:
        try:
            user_msg = Prompt.ask("[student]You[/]")
            if user_msg.strip().lower() in ["exit", "quit", "menu"]:
                console.print("[info]Session paused. Returning to main menu...[/]")
                break
                
            if not user_msg.strip():
                continue
                
            # Call agent loop
            with console.status("[bold bright_blue]Mentor is thinking & executing tools...", spinner="aesthetic"):
                turn = agent.generate_response(user_msg)
                
            # Render internal thoughts
            if show_thoughts and turn["thinking"]:
                console.print(Panel(turn["thinking"], title="Mentor Thinking Process", border_style="dim cyan", style="thinking"))
                
            # Render Socratic output
            console.print(f"\n[mentor]Socratic Mentor:[/]")
            console.print(Markdown(turn["response"]))
            console.print()
        except KeyboardInterrupt:
            console.print("\n[info]Session paused. Returning to main menu...[/]")
            break
        except Exception as e:
            console.print(f"\n[danger]An error occurred during turn: {e}[/]\n")

def main():
    load_dotenv()
    display_welcome_banner()
    
    # Instantiation variables
    try:
        memory = DatabaseMemory()
        
        # Verify API Key is available
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            console.print("[danger]ERROR: GEMINI_API_KEY is not set in environment or .env file.[/]")
            console.print("Please copy .env.template to .env and fill in your Google AI Studio API Key.")
            sys.exit(1)
            
        # Initialize RAG client (uses sharing GenAI client)
        # Create a temp dummy agent creator to fetch GenAI client
        client = genai.Client(api_key=api_key)
        rag = BareMetalRAG(client)
        
        # Sync index
        run_indexing(rag)
        
        # Helper to construct Socratic agents per session
        def create_agent(sid):
            return SocraticTrainerAgent(
                session_id=sid,
                memory=memory,
                rag=rag,
                api_key=api_key
            )
            
    except Exception as e:
        console.print(f"[danger]Failed to initialize trainer core systems: {e}[/]")
        sys.exit(1)

    while True:
        console.print("\n[info]--- Main Menu ---[/]")
        console.print("  [bold cyan][1][/] Start New Training Session")
        console.print("  [bold cyan][2][/] Resume Past Session")
        console.print("  [bold cyan][3][/] Run Evaluation Audit (Report Card)")
        console.print("  [bold cyan][4][/] Exit")
        
        menu_choice = Prompt.ask("\nSelect an action", choices=["1", "2", "3", "4"], default="1")
        
        if menu_choice == "1":
            res = start_new_session(memory, create_agent)
            if res:
                agent, sid = res
                chat_loop(agent, sid, memory)
        elif menu_choice == "2":
            res = resume_past_session(memory, create_agent)
            if res:
                agent, sid = res
                chat_loop(agent, sid, memory)
        elif menu_choice == "3":
            run_evaluation_audit(memory)
        elif menu_choice == "4":
            console.print("\n[success]Happy engineering! Keep training.[/]")
            break

if __name__ == "__main__":
    main()
