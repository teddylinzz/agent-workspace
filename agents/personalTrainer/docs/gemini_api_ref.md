# Google GenAI SDK Developer Reference Cheat Sheet

This guide explains how to use the modern, official Google GenAI Python SDK (`google-genai`). Do NOT use the legacy `google-generativeai` package.

## Client Initialization
Always initialize the client with `genai.Client()`. By default, it will load the `GEMINI_API_KEY` from the environment.
```python
from google import genai
from google.genai import types

client = genai.Client()
```

## Content Generation (Simple Text)
Use `client.models.generate_content` to make simple generation queries.
```python
response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents='Explain state management in 2 sentences.'
)
print(response.text)
```

## Seeded Chat Sessions
Create a persistent chat session using `client.chats.create`.
```python
chat = client.chats.create(
    model="gemini-2.5-flash",
    config=types.GenerateContentConfig(
        system_instruction="You are a Socratic mentor."
    )
)

# Send message and get response
response = chat.send_message("What is an agent?")
print(response.text)
```

## Embeddings (Text-Embedding-004)
Generate vector embeddings for semantic search or RAG.
```python
response = client.models.embed_content(
    model="text-embedding-004",
    contents="Hello World"
)
# Values contains the list of floats
vector = response.embeddings[0].values
print(f"Dimension: {len(vector)}") # 768 dimensions
```

## System Instructions & Safety Settings
Provide system prompts and modify temperature/safety configurations using `GenerateContentConfig`.
```python
config = types.GenerateContentConfig(
    system_instruction="Speak like a pirate.",
    temperature=0.7,
    max_output_tokens=500
)
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Tell me about yourself.",
    config=config
)
```
