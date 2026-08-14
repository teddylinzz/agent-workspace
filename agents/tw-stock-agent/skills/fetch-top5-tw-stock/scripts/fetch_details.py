import os
import sys
import json
import subprocess
import pandas as pd
import yfinance as yf
from datetime import datetime

def get_workspace_path():
    """Get the path to the tw_stocker workspace from environment variables."""
    # Look for .env in current workspace
    dotenv_path = '/Users/ted/agents/agents/tw-stock-agent/.env'
    if os.path.exists(dotenv_path):
        with open(dotenv_path, 'r') as f:
            for line in f:
                if line.startswith('TW_STOCKER_PATH='):
                    return line.strip().split('=', 1)[1].strip()
    return os.getenv("TW_STOCKER_PATH", "/Users/ted/workspace/tw_stocker").strip()

def run_command(cmd, cwd):
    print(f"Running command: {' '.join(cmd)} in {cwd}")
    result = subprocess.run(cmd, cwd=cwd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"Error running command: {result.stderr}")
    return result.stdout, result.returncode

def main():
    tw_stocker_path = get_workspace_path()
    if not os.path.exists(tw_stocker_path):
        print(f"Error: tw_stocker path '{tw_stocker_path}' does not exist.")
        sys.exit(1)
        
    python_bin = os.path.join(tw_stocker_path, ".venv", "bin", "python")
    if not os.path.exists(python_bin):
        python_bin = "python"
        
    # Step 1: Run ai_report.py to compute current signals
    print("Step 1: Running ai_report.py...")
    run_command([python_bin, "ai_report.py"], tw_stocker_path)
    
    # Step 2: Run paper_trade.py to extract and enrich signals
    print("Step 2: Running paper_trade.py signals --enrich...")
    run_command([python_bin, "paper_trade.py", "signals", "--enrich"], tw_stocker_path)
    
    # Step 3: Load signals from paper_signals.json
    signals_path = os.path.join(tw_stocker_path, "paper_signals.json")
    if not os.path.exists(signals_path):
        print("Error: paper_signals.json not found.")
        sys.exit(1)
        
    with open(signals_path, 'r', encoding='utf-8') as f:
        all_signals = json.load(f)
        
    # Get today's date in YYYY-MM-DD format
    today_str = datetime.today().strftime("%Y-%m-%d")
    
    # Filter signals for today
    today_signals = [s for s in all_signals if s.get("date") == today_str]
    
    # If no signals for today, fallback to the latest date available in the file
    if not today_signals and all_signals:
        latest_date = max(s.get("date") for s in all_signals)
        print(f"No signals found for today ({today_str}). Falling back to latest date: {latest_date}")
        today_signals = [s for s in all_signals if s.get("date") == latest_date]
        
    if not today_signals:
        print("No signals available.")
        sys.exit(0)
        
    print(f"Found {len(today_signals)} candidate stock signals.")
    
    # Add strategy path to sys.path to import institutional flow utilities
    sys.path.insert(0, tw_stocker_path)
    try:
        from strategy.institutional_flow import fetch_inst_timeseries
    except ImportError:
        fetch_inst_timeseries = None
        
    output_data = []
    
    for sig in today_signals:
        ticker = sig["ticker"]
        print(f"Fetching technicals and details for {ticker}...")
        
        # Technical indicators from yfinance
        symbol = f"{ticker}.TW"
        stock = yf.Ticker(symbol)
        df = stock.history(period="6mo")
        if df.empty:
            symbol = f"{ticker}.TWO"
            stock = yf.Ticker(symbol)
            df = stock.history(period="6mo")
            
        if df.empty:
            print(f"Warning: Could not fetch yfinance data for {ticker}")
            continue
            
        # Calculate indicators
        df['MA20'] = df['Close'].rolling(window=20).mean()
        df['MA60'] = df['Close'].rolling(window=60).mean()
        df['Vol_MA20'] = df['Volume'].rolling(window=20).mean()
        
        # RSI (14)
        delta = df['Close'].diff()
        gain = (delta.where(delta > 0, 0)).rolling(window=14).mean()
        loss = (-delta.where(delta < 0, 0)).rolling(window=14).mean()
        rs = gain / loss
        df['RSI'] = 100 - (100 / (1 + rs))
        
        # ATR (14)
        high_low = df['High'] - df['Low']
        high_close = (df['High'] - df['Close'].shift()).abs()
        low_close = (df['Low'] - df['Close'].shift()).abs()
        ranges = pd.concat([high_low, high_close, low_close], axis=1)
        true_range = ranges.max(axis=1)
        df['ATR'] = true_range.rolling(14).mean()
        
        last_row = df.iloc[-1]
        prev_row = df.iloc[-2]
        
        close_val = last_row['Close']
        ma20_val = last_row['MA20']
        ma60_val = last_row['MA60']
        
        trend = "Bullish" if close_val > ma20_val > ma60_val else ("Bearish" if close_val < ma20_val < ma60_val else "Consolidating")
        vol_ratio = last_row['Volume'] / last_row['Vol_MA20'] if last_row['Vol_MA20'] > 0 else 1.0
        
        # Detailed institutional flow ratios
        inst_ratios = {}
        if fetch_inst_timeseries:
            series = fetch_inst_timeseries(ticker)
            if series and len(series) > 0:
                last_inst = series[-1]
                inst_ratios = {
                    "foreign_ratio": last_inst.get("foreign_ratio", 0.0),
                    "trust_ratio": last_inst.get("trust_ratio", 0.0),
                    "dealer_ratio": last_inst.get("dealer_ratio", 0.0),
                    "three_inst_ratio": last_inst.get("three_inst_ratio", 0.0),
                    "change_20": last_inst.get("three_inst_ratio_change_20", 0.0)
                }
                
        output_data.append({
            "ticker": ticker,
            "date": sig.get("date"),
            "entry_price": sig.get("entry_price"),
            "tp_price": sig.get("tp_price"),
            "sl_price": sig.get("sl_price"),
            "exit_date": sig.get("exit_date"),
            "status": sig.get("status"),
            "inst_flow_change_pct": sig.get("inst_flow"),
            "news_sentiment_score": sig.get("news_score"),
            "technical": {
                "close": round(close_val, 2),
                "open": round(last_row['Open'], 2),
                "high": round(last_row['High'], 2),
                "low": round(last_row['Low'], 2),
                "change_pct": round(((close_val - prev_row['Close']) / prev_row['Close']) * 100, 2),
                "volume": int(last_row['Volume']),
                "vol_ma20": int(last_row['Vol_MA20']),
                "vol_ratio": round(vol_ratio, 2),
                "ma20": round(ma20_val, 2) if not pd.isna(ma20_val) else None,
                "ma60": round(ma60_val, 2) if not pd.isna(ma60_val) else None,
                "rsi": round(last_row['RSI'], 2) if not pd.isna(last_row['RSI']) else None,
                "atr": round(last_row['ATR'], 2) if not pd.isna(last_row['ATR']) else None,
                "trend": trend
            },
            "inst_detailed_ratios": inst_ratios
        })
        
    print("\n--- STOCK DATA FETCH COMPLETED ---")
    print(json.dumps(output_data, ensure_ascii=False, indent=2))

if __name__ == '__main__':
    main()
