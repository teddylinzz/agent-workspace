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
        api.login_by_token(api_token=api_key)

    stock_id = "00937B"
    # Query for the last 5 days
    start_date = (datetime.now() - timedelta(days=5)).strftime("%Y-%m-%d")
    print(f"Fetching price data for {stock_id} starting from {start_date}...")
    
    try:
        df = api.taiwan_stock_daily(
            stock_id=stock_id,
            start_date=start_date
        )
        if df.empty:
            print("No price data returned from FinMind.")
        else:
            print("\nPrice data fetched successfully:")
            print(df.to_string())
    except Exception as e:
        print(f"Error fetching data: {e}")

if __name__ == "__main__":
    main()
