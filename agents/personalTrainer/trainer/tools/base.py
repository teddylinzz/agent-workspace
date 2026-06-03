from abc import ABC, abstractmethod
from typing import Dict, Any

class BaseTool(ABC):
    """
    Abstract Base Class for modular agent tools (inspired by OpenClaw skills).
    Inheriting classes must implement `name`, `description`, `parameters`, and `execute`.
    """

    @property
    @abstractmethod
    def name(self) -> str:
        """The name of the function as it should appear in the Gemini tool definitions."""
        pass

    @property
    @abstractmethod
    def description(self) -> str:
        """A clear description of what the tool does, used by Gemini to decide when to invoke it."""
        pass

    @property
    @abstractmethod
    def parameters(self) -> Dict[str, Any]:
        """
        The JSON Schema definition of the function parameters.
        Must conform to JSON Schema structure (e.g. types, properties, required).
        """
        pass

    @abstractmethod
    def execute(self, **kwargs) -> Any:
        """
        The actual python execution logic.
        Receives parameters as kwargs and returns a string or JSON response.
        """
        pass

    def to_gemini_tool_definition(self) -> Dict[str, Any]:
        """Formats the tool schemas according to the official google-genai function declarations."""
        return {
            "name": self.name,
            "description": self.description,
            "parameters": self.parameters
        }
