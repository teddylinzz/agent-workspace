from google import genai
import math

def retrieve_top_document(query: str, documents: list[str]) -> str:
    """
    Retrieves the document from 'documents' that is semantically most similar to 'query'.
    
    Args:
        query: The user query string.
        documents: A list of candidate document strings.
        
    Returns:
        The text of the top-matching document, or "" if documents is empty.
    """
    if not documents:
        return ""
        
    # TODO: Implement your solution here
    # Hint: Use genai.Client() and model="text-embedding-004"
    # Ensure you handle edge cases such as empty query or division by zero.
    
    return ""
