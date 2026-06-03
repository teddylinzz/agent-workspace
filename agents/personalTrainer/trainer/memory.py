import sqlite3
import json
from typing import List, Dict, Optional, Tuple

class DatabaseMemory:
    def __init__(self, db_path: str = "trainer_history.db"):
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        """Initializes tables for sessions, messages, and tool execution audits."""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            # Sessions Table
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS sessions (
                    session_id TEXT PRIMARY KEY,
                    concept_name TEXT NOT NULL,
                    skill_level TEXT NOT NULL,
                    start_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """)
            # Messages Table (Stores raw message content and optional internal thinking steps)
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS messages (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    session_id TEXT NOT NULL,
                    role TEXT NOT NULL,
                    content TEXT NOT NULL,
                    thinking_step TEXT,
                    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (session_id) REFERENCES sessions(session_id) ON DELETE CASCADE
                )
            """)
            # Tool Calls Table (Tracks arguments and results for local agent testing validation)
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS tool_calls (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    session_id TEXT NOT NULL,
                    tool_name TEXT NOT NULL,
                    arguments TEXT NOT NULL,
                    result TEXT NOT NULL,
                    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (session_id) REFERENCES sessions(session_id) ON DELETE CASCADE
                )
            """)
            conn.commit()

    def create_session(self, session_id: str, concept: str, skill_level: str):
        """Creates a new learning session in the database."""
        with sqlite3.connect(self.db_path) as conn:
            conn.execute(
                "INSERT INTO sessions (session_id, concept_name, skill_level) VALUES (?, ?, ?)",
                (session_id, concept, skill_level)
            )
            conn.commit()

    def add_message(self, session_id: str, role: str, content: str, thinking_step: Optional[str] = None):
        """Saves a single message (user or model), preserving internal reasoning."""
        with sqlite3.connect(self.db_path) as conn:
            conn.execute(
                "INSERT INTO messages (session_id, role, content, thinking_step) VALUES (?, ?, ?, ?)",
                (session_id, role, content, thinking_step)
            )
            conn.commit()

    def get_session_history(self, session_id: str) -> List[Dict]:
        """Fetches history of a session formatted for Google Gemini API's contents format."""
        with sqlite3.connect(self.db_path) as conn:
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute(
                "SELECT role, content, thinking_step FROM messages WHERE session_id = ? ORDER BY id ASC",
                (session_id,)
            )
            rows = cursor.fetchall()
            
            history = []
            for row in rows:
                # If we have internal thinking, we reconstruct it in <thinking> tags for agent context
                full_text = row["content"]
                if row["thinking_step"] and row["role"] == "model":
                    full_text = f"<thinking>\n{row['thinking_step']}\n</thinking>\n{row['content']}"
                
                # Gemini contents API role is 'user' or 'model'
                history.append({
                    "role": row["role"],
                    "parts": [{"text": full_text}]
                })
            return history

    def get_active_sessions(self) -> List[Tuple[str, str, str, str]]:
        """Returns all sessions sorted by recency for interactive CLI selection."""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                SELECT session_id, concept_name, skill_level, start_time 
                FROM sessions 
                ORDER BY start_time DESC
            """)
            return cursor.fetchall()

    def log_tool_call(self, session_id: str, tool_name: str, arguments: dict, result: str):
        """Logs details of tool executions."""
        with sqlite3.connect(self.db_path) as conn:
            conn.execute(
                "INSERT INTO tool_calls (session_id, tool_name, arguments, result) VALUES (?, ?, ?, ?)",
                (session_id, tool_name, json.dumps(arguments), result)
            )
            conn.commit()
