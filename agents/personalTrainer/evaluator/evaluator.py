import os
import sys
import sqlite3
from typing import Optional
from google import genai

# Enable importing from project root
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
from trainer.memory import DatabaseMemory

EVALUATOR_PROMPT = """
You are an independent AI Engineering QA Auditor. Your task is to evaluate the transcript of a Socratic AI Engineering training session.
You will grade the "Socratic Trainer Agent" (model) against a strict rubric.

Here is the transcript to evaluate:
--- TRANSCRIPT START ---
{transcript}
--- TRANSCRIPT END ---

Evaluate the Trainer's performance on the following three criteria:

1. CODE SPOILING RATE (Target: 0%)
   - Check if the Socratic Trainer gave away direct code blocks representing the solution or parts of the solution that the user was supposed to write.
   - Note: Explaining syntax structure, showing wrong vs. right conceptual shapes, or providing non-spoiling boilerplate is acceptable.
   - Grade: 0% to 100% (0% means it did NOT spoil code; 100% means it spoiled the entire solution).

2. TECHNICAL ACCURACY (Target: 100%)
   - Did the trainer teach accurate, modern API patterns and concepts? (For example, did it recommend the modern google-genai SDK instead of the legacy google-generativeai, and correct concepts for state/tools/RAG?)
   - Grade: 0% to 100%.

3. CLARITY & SCANNABILITY
   - Did it communicate in a direct, practical tone?
   - Did it avoid dense walls of text, using markdown formatting, lists, tables, or alerts where appropriate?
   - Grade: PASS or FAIL (with comments).

Output your evaluation in a beautiful Markdown Report Card. Be direct and analytical. Use the following template:

# EVALUATION REPORT CARD

### Session Summary
* **Session ID:** {session_id}
* **Concept:** {concept_name}
* **Difficulty:** {skill_level}

---

## 1. Code Spoiling Rate
* **Score:** [Score]%
* **Assessment:** [Detail why it received this score, listing any spoiled code blocks if any]

## 2. Technical Accuracy
* **Score:** [Score]%
* **Assessment:** [Detail any technical inaccuracies or verify correct guidance]

## 3. Clarity & Scannability
* **Status:** [PASS/FAIL]
* **Assessment:** [Detail formatting and communication clarity]

## Auditor's Final Verdict & Feedback
[Provide 2-3 direct recommendations for prompt adjustments if rules were violated]
"""

class SessionEvaluator:
    def __init__(self, db_path: str = "trainer_history.db", model_name: str = "gemini-2.5-flash", api_key: Optional[str] = None):
        self.db_path = db_path
        self.model_name = model_name
        
        gemini_key = api_key or os.getenv("GEMINI_API_KEY")
        if not gemini_key:
            raise ValueError("GEMINI_API_KEY not found in environment.")
        self.client = genai.Client(api_key=gemini_key)

    def evaluate_session(self, session_id: str) -> str:
        """Fetches the session transcript, formats it, runs the auditor LLM, and returns the report card."""
        # Fetch metadata
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT concept_name, skill_level FROM sessions WHERE session_id = ?", (session_id,))
            meta = cursor.fetchone()
            if not meta:
                return f"[ERROR] Session '{session_id}' not found in database."
            concept_name, skill_level = meta

            # Fetch messages
            cursor.execute("SELECT role, content, thinking_step FROM messages WHERE session_id = ? ORDER BY id ASC", (session_id,))
            messages = cursor.fetchall()
            
        if not messages:
            return "[ERROR] No conversation history found for this session."

        # Reconstruct transcript
        transcript_parts = []
        for role, content, thinking in messages:
            display_role = "STUDENT (User)" if role == "user" else "MENTOR (Agent)"
            transcript_parts.append(f"[{display_role}]")
            if thinking and role == "model":
                transcript_parts.append(f"Internal thoughts: {thinking}")
            transcript_parts.append(content)
            transcript_parts.append("-" * 30)

        transcript = "\n".join(transcript_parts)

        # Formulate prompt
        prompt = EVALUATOR_PROMPT.format(
            transcript=transcript,
            session_id=session_id,
            concept_name=concept_name,
            skill_level=skill_level
        )

        try:
            response = self.client.models.generate_content(
                model=self.model_name,
                contents=prompt
            )
            return response.text
        except Exception as e:
            return f"[ERROR] Auditor API call failed: {e}"

if __name__ == "__main__":
    from dotenv import load_dotenv
    load_dotenv()
    
    if len(sys.argv) < 2:
        print("Usage: python evaluator.py <session_id>")
        sys.exit(1)
        
    sess_id = sys.argv[1]
    print(f"Auditing session: {sess_id}...\n")
    
    try:
        evaluator = SessionEvaluator()
        report = evaluator.evaluate_session(sess_id)
        print(report)
    except Exception as err:
        print(f"Error: {err}")
