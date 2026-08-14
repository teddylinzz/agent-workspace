import os
import sys
from datetime import datetime, timedelta
import pandas as pd
from dotenv import load_dotenv
from FinMind.data import DataLoader

def main():
    load_dotenv()
    
    # Get stock_id from command line args, default to "2481" (強茂)
    stock_id = sys.argv[1] if len(sys.argv) > 1 else "2481"
    stock_id = stock_id.strip().upper()
    
    # Initialize DataLoader
    api_key = os.getenv("FINMIND_API_KEY", "")
    api = DataLoader()
    if api_key and not api_key.startswith("your-"):
        api.login_by_token(api_token=api_key)

    start_date = (datetime.now() - timedelta(days=12)).strftime("%Y-%m-%d")
    print(f"Fetching data for {stock_id} starting from {start_date}...")
    
    try:
        # Fetch prices
        df_price = api.taiwan_stock_daily(stock_id=stock_id, start_date=start_date)
        # Fetch institutional investors
        df_inst = api.taiwan_stock_institutional_investors(stock_id=stock_id, start_date=start_date)
        
        if df_price.empty:
            print(f"No price data found for {stock_id}.")
            return
        if df_inst.empty:
            print(f"No institutional investor data found for {stock_id}.")
            return
            
        # Process institutional investors
        df_inst['net_buy_shares'] = df_inst['buy'] - df_inst['sell']
        df_inst['net_buy_sheets'] = df_inst['net_buy_shares'] / 1000.0
        
        pivot_inst = df_inst.pivot_table(
            index='date', 
            columns='name', 
            values='net_buy_sheets', 
            aggfunc='sum'
        ).fillna(0)
        
        # Ensure all columns exist
        required_cols = ['Foreign_Investor', 'Investment_Trust', 'Dealer_self', 'Dealer_Hedging']
        for col in required_cols:
            if col not in pivot_inst.columns:
                pivot_inst[col] = 0.0
                
        pivot_inst['Total_Net_Sheets'] = sum(pivot_inst[col] for col in required_cols)
        
        # Process prices
        df_price_clean = df_price[['date', 'open', 'max', 'min', 'close', 'spread', 'Trading_Volume']].copy()
        df_price_clean['Trading_Volume_Sheets'] = df_price_clean['Trading_Volume'] / 1000.0
        
        # Merge
        merged = pd.merge(df_price_clean, pivot_inst, on='date', how='inner')
        merged = merged.sort_values(by='date', ascending=False)
        
        print("\nMerged Data:")
        print(merged.to_string(index=False))
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
