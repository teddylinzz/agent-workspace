import os
from datetime import datetime, timedelta
import pandas as pd
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
    start_date = (datetime.now() - timedelta(days=12)).strftime("%Y-%m-%d")
    
    try:
        # Fetch prices
        df_price = api.taiwan_stock_daily(stock_id=stock_id, start_date=start_date)
        # Fetch institutional investors
        df_inst = api.taiwan_stock_institutional_investors(stock_id=stock_id, start_date=start_date)
        
        if df_price.empty or df_inst.empty:
            print("Missing data.")
            return
            
        # Process institutional investors
        # We need to pivot or aggregate by date and name
        # Names: Foreign_Investor, Foreign_Dealer_Self, Investment_Trust, Dealer_self, Dealer_Hedging
        df_inst['net_buy_shares'] = df_inst['buy'] - df_inst['sell']
        df_inst['net_buy_sheets'] = df_inst['net_buy_shares'] / 1000.0
        
        pivot_inst = df_inst.pivot_table(
            index='date', 
            columns='name', 
            values='net_buy_sheets', 
            aggfunc='sum'
        ).fillna(0)
        
        # Ensure all columns exist
        for col in ['Foreign_Investor', 'Investment_Trust', 'Dealer_self', 'Dealer_Hedging']:
            if col not in pivot_inst.columns:
                pivot_inst[col] = 0.0
                
        pivot_inst['Total_Net_Sheets'] = (
            pivot_inst['Foreign_Investor'] + 
            pivot_inst['Investment_Trust'] + 
            pivot_inst['Dealer_self'] + 
            pivot_inst['Dealer_Hedging']
        )
        
        # Process prices
        df_price_clean = df_price[['date', 'open', 'max', 'min', 'close', 'spread', 'Trading_Volume']].copy()
        df_price_clean['Trading_Volume_Sheets'] = df_price_clean['Trading_Volume'] / 1000.0
        
        # Merge
        merged = pd.merge(df_price_clean, pivot_inst, on='date', how='inner')
        merged = merged.sort_values(by='date', ascending=False)
        
        print(merged.to_string(index=False))
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
