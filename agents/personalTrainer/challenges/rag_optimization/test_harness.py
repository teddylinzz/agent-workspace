import sys
import os

# Ensure the workspace is in the python path
sys.path.append(os.path.abspath(os.path.dirname(__file__)))

def run_tests():
    print("Running Socratic Trainer Test Suite...")
    
    # 1. Attempt to import solution.py
    try:
        from solution import retrieve_top_document
    except ImportError as e:
        print("[FAIL] Could not import 'retrieve_top_document' from solution.py.")
        print(f"Details: {e}")
        sys.exit(1)
    except SyntaxError as e:
        print("[FAIL] Syntax error in solution.py.")
        print(f"Details: {e}")
        sys.exit(1)

    passed_tests = 0
    total_tests = 3

    # Test Case 1: Empty documents list
    try:
        res = retrieve_top_document("test query", [])
        assert res == "", f"Expected empty string, got '{res}'"
        print("[PASS] Test Case 1: Empty documents handled correctly.")
        passed_tests += 1
    except AssertionError as e:
        print(f"[FAIL] Test Case 1: {e}")
    except Exception as e:
        print(f"[FAIL] Test Case 1 crashed: {e}")

    # Test Case 2: Simple semantic retrieval
    try:
        query = "How do I instantiate the Gemini API client?"
        docs = [
            "Ancient Roman armies used various formations including the testudo.",
            "Initialize the client using client = genai.Client() from the google-genai SDK.",
            "To bake an apple pie, you need sugar, apples, flour, and butter."
        ]
        res = retrieve_top_document(query, docs)
        assert res == docs[1], f"Expected doc 1 ('{docs[1]}'), but got '{res}'"
        print("[PASS] Test Case 2: Semantic retrieval matched correctly.")
        passed_tests += 1
    except AssertionError as e:
        print(f"[FAIL] Test Case 2: {e}")
    except Exception as e:
        print(f"[FAIL] Test Case 2 crashed: {e}")

    # Test Case 3: Empty query or doc edge cases
    try:
        query = ""
        docs = ["Hello World", "Another document"]
        # Empty query should not crash, it should just return one of the docs safely
        res = retrieve_top_document(query, docs)
        assert res in docs, "Expected one of the candidate documents, but got empty or invalid result."
        print("[PASS] Test Case 3: Empty query handled gracefully without crashing.")
        passed_tests += 1
    except AssertionError as e:
        print(f"[FAIL] Test Case 3: {e}")
    except Exception as e:
        print(f"[FAIL] Test Case 3 crashed: {e}")

    print(f"\nResult: {passed_tests}/{total_tests} tests passed.")
    if passed_tests == total_tests:
        print("[SUCCESS] All tests passed! You have completed the challenge.")
        sys.exit(0)
    else:
        print("[FAILURE] Some tests failed. Inspect your logic and try again.")
        sys.exit(1)

if __name__ == "__main__":
    run_tests()
