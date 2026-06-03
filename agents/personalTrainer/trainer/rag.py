import os
import sqlite3
import struct
from typing import List, Dict, Optional, Tuple

class BareMetalRAG:
    def __init__(self, client, db_path: str = "trainer_history.db"):
        """
        client: An instance of google.genai.Client
        """
        self.client = client
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        """Creates the document embeddings table if it doesn't exist."""
        with sqlite3.connect(self.db_path) as conn:
            conn.execute("""
                CREATE TABLE IF NOT EXISTS document_embeddings (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    source TEXT NOT NULL,
                    text_content TEXT NOT NULL,
                    embedding BLOB NOT NULL
                )
            """)
            conn.commit()

    @staticmethod
    def _pack_vector(vector: List[float]) -> bytes:
        """Packs a list of floats into a binary BLOB."""
        return struct.pack(f"{len(vector)}f", *vector)

    @staticmethod
    def _unpack_vector(blob: bytes) -> List[float]:
        """Unpacks a binary BLOB into a list of floats."""
        num_floats = len(blob) // 4
        return list(struct.unpack(f"{num_floats}f", blob))

    @staticmethod
    def _cosine_similarity(v1: List[float], v2: List[float]) -> float:
        """Computes cosine similarity between two vectors."""
        dot_product = sum(x * y for x, y in zip(v1, v2))
        norm_v1 = sum(x * x for x in v1) ** 0.5
        norm_v2 = sum(x * x for x in v2) ** 0.5
        if norm_v1 == 0 or norm_v2 == 0:
            return 0.0
        return dot_product / (norm_v1 * norm_v2)

    def chunk_text(self, text: str, max_chunk_len: int = 800) -> List[str]:
        """Simple chunker that splits markdown text by headings or paragraphs."""
        paragraphs = text.split("\n\n")
        chunks = []
        current_chunk = []
        current_len = 0

        for para in paragraphs:
            para = para.strip()
            if not para:
                continue
            # If a single paragraph is huge, split it by sentences
            if len(para) > max_chunk_len:
                if current_chunk:
                    chunks.append("\n\n".join(current_chunk))
                    current_chunk = []
                    current_len = 0
                # Fallback simple split
                sentences = para.split(". ")
                for sent in sentences:
                    sent = sent.strip()
                    if current_len + len(sent) > max_chunk_len:
                        if current_chunk:
                            chunks.append(". ".join(current_chunk) + ".")
                        current_chunk = [sent]
                        current_len = len(sent)
                    else:
                        current_chunk.append(sent)
                        current_len += len(sent)
                if current_chunk:
                    chunks.append(". ".join(current_chunk) + ".")
                    current_chunk = []
                    current_len = 0
            elif current_len + len(para) > max_chunk_len:
                chunks.append("\n\n".join(current_chunk))
                current_chunk = [para]
                current_len = len(para)
            else:
                current_chunk.append(para)
                current_len += len(para)
        
        if current_chunk:
            chunks.append("\n\n".join(current_chunk))
        
        return chunks

    def index_directory(self, docs_dir: str):
        """Indexes all markdown files in the specified directory if they haven't been indexed already."""
        if not os.path.exists(docs_dir):
            os.makedirs(docs_dir)
            return

        for filename in os.listdir(docs_dir):
            if filename.endswith(".md"):
                file_path = os.path.join(docs_dir, filename)
                
                # Check if this file is already indexed
                with sqlite3.connect(self.db_path) as conn:
                    cursor = conn.cursor()
                    cursor.execute("SELECT COUNT(*) FROM document_embeddings WHERE source = ?", (filename,))
                    if cursor.fetchone()[0] > 0:
                        continue # Already indexed
                
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()

                chunks = self.chunk_text(content)
                for chunk in chunks:
                    if not chunk.strip():
                        continue
                    try:
                        response = self.client.models.embed_content(
                            model="gemini-embedding-2",
                            contents=chunk
                        )
                        embedding = response.embeddings[0].values
                        packed = self._pack_vector(embedding)
                        
                        with sqlite3.connect(self.db_path) as conn:
                            conn.execute(
                                "INSERT INTO document_embeddings (source, text_content, embedding) VALUES (?, ?, ?)",
                                (filename, chunk, packed)
                            )
                            conn.commit()
                    except Exception as e:
                        print(f"[RAG ERROR] Failed to embed chunk for file {filename}: {e}")

    def query(self, query_text: str, top_k: int = 3) -> List[Dict]:
        """Embeds query_text, performs similarity search in SQLite, and returns top_k results."""
        try:
            response = self.client.models.embed_content(
                model="gemini-embedding-2",
                contents=query_text
            )
            query_vector = response.embeddings[0].values
        except Exception as e:
            print(f"[RAG ERROR] Failed to embed query: {e}")
            return []

        results = []
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT source, text_content, embedding FROM document_embeddings")
            rows = cursor.fetchall()
            
            for source, text_content, blob in rows:
                doc_vector = self._unpack_vector(blob)
                similarity = self._cosine_similarity(query_vector, doc_vector)
                results.append({
                    "source": source,
                    "text": text_content,
                    "score": similarity
                })
        
        # Sort by similarity score descending
        results.sort(key=lambda x: x["score"], reverse=True)
        return results[:top_k]
