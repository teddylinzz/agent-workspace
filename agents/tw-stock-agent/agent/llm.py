import os
from typing import Any
from openai import OpenAI

class LLMClient:
    """OpenAI-compatible client wrapper configured for Google Gemini by default."""

    def __init__(
        self,
        model: str | None = None,
        temperature: float | None = None,
        max_tokens: int | None = None,
    ):
        self.api_key = os.getenv("GEMINI_API_KEY")
        self.model = model or os.getenv("LLM_MODEL") or "gemini-2.5-flash"
        self.temperature = temperature if temperature is not None else 0.2
        self.max_tokens = max_tokens if max_tokens is not None else 8192

        if not self.api_key:
            self._client = None
        else:
            self._client = OpenAI(
                api_key=self.api_key,
                base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
            )

    def chat(
        self,
        *,
        messages: list[dict] | None = None,
        system: str | None = None,
        user: str | None = None,
        tools: list[dict] | None = None,
    ) -> Any:
        """Send messages to the Gemini API."""
        if not self._client:
            raise RuntimeError(
                "GEMINI_API_KEY environment variable is not set. Please set it in your .env file."
            )

        if messages:
            final_messages = messages
        else:
            final_messages = []
            if system:
                final_messages.append({"role": "system", "content": system})
            if user:
                final_messages.append({"role": "user", "content": user})

        kwargs = {
            "model": self.model,
            "messages": final_messages,
            "temperature": self.temperature,
            "max_tokens": self.max_tokens,
        }

        if tools:
            kwargs["tools"] = tools

        return self._client.chat.completions.create(**kwargs)
