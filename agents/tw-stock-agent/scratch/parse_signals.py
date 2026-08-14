import json
import re

def main():
    filepath = "/Users/ted/agents/agents/tw-stock-agent/scratch/details.json"
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Locate where the JSON starts
    json_start = content.find('[')
    if json_start == -1:
        print("JSON start not found")
        return
        
    json_content = content[json_start:]
    # Remove trailing info if any
    json_end = json_content.rfind(']')
    if json_end != -1:
        json_content = json_content[:json_end+1]
        
    try:
        data = json.loads(json_content)
    except Exception as e:
        print(f"Error parsing JSON: {e}")
        # Try to fix some common json format issues if any
        return
        
    print(f"Total signal records parsed: {len(data)}")
    
    # Group by ticker, keeping the latest or most detailed
    unique_stocks = {}
    for item in data:
        ticker = item["ticker"]
        # If not in unique_stocks or has more detailed fields (non-zero institutional change or non-zero sentiment)
        if ticker not in unique_stocks:
            unique_stocks[ticker] = item
        else:
            # Prefer the one with positive change_20 or non-zero elements
            existing = unique_stocks[ticker]
            existing_change = existing.get("inst_detailed_ratios", {}).get("change_20", 0.0)
            new_change = item.get("inst_detailed_ratios", {}).get("change_20", 0.0)
            if abs(new_change) > abs(existing_change):
                unique_stocks[ticker] = item
            elif item.get("news_sentiment_score", 0.0) > existing.get("news_sentiment_score", 0.0):
                unique_stocks[ticker] = item
                
    print("\n--- Unique Candidate Stocks ---")
    for ticker, info in sorted(unique_stocks.items()):
        tech = info.get("technical", {})
        inst = info.get("inst_detailed_ratios", {})
        print(f"Ticker: {ticker}")
        print(f"  Close: {tech.get('close')} ({tech.get('change_pct')}%), Vol Ratio: {tech.get('vol_ratio')}")
        print(f"  Trend: {tech.get('trend')}, RSI: {tech.get('rsi')}, ATR: {tech.get('atr')}")
        print(f"  Entry: {info.get('entry_price')}, TP: {info.get('tp_price')}, SL: {info.get('sl_price')}")
        print(f"  Inst Flow (20d Change): {inst.get('change_20')}%")
        print(f"  Inst Detailed: Foreign: {inst.get('foreign_ratio')}%, Trust: {inst.get('trust_ratio')}%, Dealer: {inst.get('dealer_ratio')}%")
        print(f"  News Sentiment: {info.get('news_sentiment_score')}")
        print("-" * 40)

if __name__ == '__main__':
    main()
