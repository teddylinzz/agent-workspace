import os
from datetime import datetime, timedelta
from dotenv import load_dotenv
from FinMind.data import DataLoader

def main():
    load_dotenv()
    
    # Initialize DataLoader
    api_key = os.getenv("FINMIND_API_KEY", "")
    api = DataLoader()
    if api_key and not api_key.startswith("your-"):
        print(f"Logging in with token...")
        api.login_by_token(api_token=api_key)
    else:
        print("Using FinMind without token...")

    stock_id = "00937B"
    # Query for the last 10 days
    start_date = (datetime.now() - timedelta(days=10)).strftime("%Y-%m-%d")
    print(f"Fetching data for {stock_id} starting from {start_date}...")
    
    try:
        df = api.taiwan_stock_institutional_investors(
            stock_id=stock_id,
            start_date=start_date
        )
        if df.empty:
            print("No data returned from FinMind.")
        else:
            print("\nData fetched successfully:")
            print(df.to_string())
    except Exception as e:
        print(f"Error fetching data: {e}")

if __name__ == "__main__":
    main()
