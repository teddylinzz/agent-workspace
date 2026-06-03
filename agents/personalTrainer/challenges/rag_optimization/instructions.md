# Challenge: Cosine Similarity Document Retrieval with Gemini Embeddings

Retrieval-Augmented Generation (RAG) depends heavily on retrieving the most relevant context chunks. In this challenge, you will build a bare-metal, vector-based retriever that takes a query and a list of text documents, fetches their embeddings using the modern Gemini SDK (`google-genai`), and returns the top-ranked document.

---

## Architectural Concept

### The Wrong Way: Relying on heavy abstractions or ignoring edge cases
Many developers jump straight into vector databases without understanding the math, leading to fragile error handling:
- **No sanitization:** If the query is empty or documents are empty, it crashes.
- **Division by zero:** If a document is empty or has zero vector magnitude, computing cosine similarity throws a division-by-zero error.
- **Ignoring batching:** Making sequential API calls for 50 documents instead of utilizing batch embedding.

### The Right Way: Pure mathematical similarity with robust checks
Write clean vector computations, utilize the batch embedding endpoints in the Gemini SDK, and handle zero-magnitude or empty array boundaries:
$$\text{Similarity}(A, B) = \frac{A \cdot B}{\|A\| \|B\|}$$

---

## Your Task
Open `solution.py` in the `workspace/` folder. Implement the function `retrieve_top_document(query: str, documents: list[str]) -> str`.

Your implementation must:
1. Initialize the modern Gemini Client (`genai.Client()`).
2. Fetch the embedding vector for the `query` using `text-embedding-004`.
3. Fetch the embedding vectors for all `documents` in a **single batched call** (passing a list of strings to the embed API).
4. Compute the cosine similarity between the query vector and each document vector.
5. Return the document with the highest similarity score.
6. **Robustness:** If `documents` is empty, return an empty string `""`. If the query is empty or a document has zero vector magnitude, handle it gracefully without crashing (return similarity score `0.0` for that doc).

---

## Verification
To run tests and verify your solution, run the following tool in the chat or terminal:
`run_test_harness` (which runs `python test_harness.py`)
