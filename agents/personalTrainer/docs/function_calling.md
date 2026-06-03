# Gemini SDK Function Calling Reference

Function calling (tool use) allows the Gemini model to request execution of native client-side functions.

## 1. Declaring Python Functions as Tools
Any standard Python function can be passed as a tool, provided it has type hints and clear docstrings. Docstrings are used by Gemini to understand when and how to call the function.

```python
def get_current_weather(location: str, unit: str = "celsius") -> str:
    """
    Get the current weather for a given location.

    Args:
        location: The city and state, e.g., San Francisco, CA
        unit: Temperature unit, either 'celsius' or 'fahrenheit'
    """
    return f"The weather in {location} is 22 degrees {unit}."
```

## 2. Passing Tools to the Client
Pass tools as a list of functions inside the `GenerateContentConfig`.
```python
from google import genai
from google.genai import types

client = genai.Client()

config = types.GenerateContentConfig(
    tools=[get_current_weather]
)

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="What's the weather in Seattle?",
    config=config
)
```

## 3. Resolving Tool Calls (Manual Loop)
When the model wants to call a function, the response will contain `function_calls`. You must run the function locally, and return the result to the model.

```python
# Check if model requested a tool call
if response.function_calls:
    for call in response.function_calls:
        # call.name is 'get_current_weather'
        # call.args is a dict of parameters, e.g. {'location': 'Seattle'}
        if call.name == "get_current_weather":
            result = get_current_weather(**call.args)
            
            # Send result back to continue conversation
            # Format as a tool response part
            tool_response_part = types.Part.from_function_response(
                name=call.name,
                response={"result": result}
            )
```

## 4. Automatic Tool Routing (Chat Mode)
When using `client.chats`, the Gemini Python SDK handles the function execution loop **automatically** if tools are declared on chat creation!
```python
chat = client.chats.create(
    model="gemini-2.5-flash",
    config=types.GenerateContentConfig(
        tools=[get_current_weather]
    )
)

# This will automatically run get_current_weather and return final text!
response = chat.send_message("Is it raining in Paris?")
print(response.text)
```
> [!IMPORTANT]
> Automatic tool routing ONLY works in `chats` mode. For single `generate_content` runs, you must manage the routing loop manually.
