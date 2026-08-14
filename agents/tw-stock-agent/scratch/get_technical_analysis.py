import sys
import os
import json
import yfinance as yf
import pandas as pd

sys.path.append('/Users/ted/agents/agents/tw-stock-agent')
sys.path.append('/Users/ted/workspace/tw_stocker')

from strategy.institutional_flow import get_inst_flow_for_signals
from strategy.news_sentiment import get_news_sentiment_for_signals

tickers = ['6116', '2327', '3481', '3149', '2344', '2356', '6239']
names = {
    '6116': '彩晶',
    '2327': '國巨',
    '3481': '群創',
    '3149': '正達',
    '2344': '華邦電',
    '2356': '英業達',
    '6239': '力成'
}

inst_flow = get_inst_flow_for_signals(tickers)
news_sent = get_news_sentiment_for_signals(tickers)

# Load candidate signals
with open('/Users/ted/workspace/tw_stocker/paper_signals.json') as f:
    signals = json.load(f)

# Keep only the latest 2026-06-04 signals
signals_0604 = {s['ticker']: s for s in signals if s['date'] == '2026-06-04'}

results = []
for t in tickers:
    symbol = f'{t}.TW'
    stock = yf.Ticker(symbol)
    df = stock.history(period='3mo')
    if df.empty:
        symbol = f'{t}.TWO'
        stock = yf.Ticker(symbol)
        df = stock.history(period='3mo')
    
    if df.empty:
        print(f"No data for {t}")
        continue
    
    df.index = pd.to_datetime(df.index).date
    
    # Calculate MAs
    df['5MA'] = df['Close'].rolling(window=5).mean()
    df['20MA'] = df['Close'].rolling(window=20).mean()
    df['60MA'] = df['Close'].rolling(window=60).mean()
    df['Volume_5MA'] = df['Volume'].rolling(window=5).mean()
    
    latest_date = df.index[-1]
    latest_row = df.iloc[-1]
    prev_row = df.iloc[-2]
    
    close = float(latest_row['Close'])
    prev_close = float(prev_row['Close'])
    pct_change = ((close - prev_close) / prev_close) * 100
    
    vol = int(latest_row['Volume'])
    prev_vol = int(prev_row['Volume'])
    vol_5ma = float(latest_row['Volume_5MA'])
    vol_ratio = vol / vol_5ma if vol_5ma > 0 else 0
    
    ma5 = float(latest_row['5MA'])
    ma20 = float(latest_row['20MA'])
    ma60 = float(latest_row['60MA'])
    
    # K-line patterns and trends
    # Bullish / Bearish trend
    trend = "多頭" if close > ma5 > ma20 > ma60 else ("空頭" if close < ma5 < ma20 < ma60 else "震盪")
    
    # Candlestick characteristics
    # Upper shadow, lower shadow, body
    high = float(latest_row['High'])
    low = float(latest_row['Low'])
    open_p = float(latest_row['Open'])
    
    body = abs(close - open_p)
    upper_shadow = high - max(close, open_p)
    lower_shadow = min(close, open_p) - low
    total_range = high - low if high > low else 1
    
    candlestick_desc = ""
    if pct_change < -9.5:
         candlestick_desc = "跌停長黑 K"
    elif pct_change > 9.5:
         candlestick_desc = "漲停長紅 K"
    elif body / total_range > 0.6:
         candlestick_desc = "長紅 K" if close > open_p else "長黑 K"
    elif upper_shadow / total_range > 0.4 and lower_shadow / total_range > 0.4:
         candlestick_desc = "十字星 (多空交戰)"
    elif upper_shadow / total_range > 0.5:
         candlestick_desc = "避雷針 (上影線長，上方賣壓重)"
    elif lower_shadow / total_range > 0.5:
         candlestick_desc = "錘子線 (下影線長，下方支撐強)"
    else:
         candlestick_desc = "實體較小的 K 線"
         
    # Check if price is above MA
    above_ma5 = close > ma5
    above_ma20 = close > ma20
    
    sig = signals_0604.get(t, {})
    
    results.append({
        'ticker': t,
        'name': names[t],
        'date': str(latest_date),
        'close': round(close, 2),
        'pct_change': round(pct_change, 2),
        'volume': vol,
        'volume_prev': prev_vol,
        'volume_ratio_5ma': round(vol_ratio, 2),
        'ma5': round(ma5, 2),
        'ma20': round(ma20, 2),
        'ma60': round(ma60, 2),
        'trend': trend,
        'above_ma5': above_ma5,
        'above_ma20': above_ma20,
        'candlestick': candlestick_desc,
        'inst_change_20d': round(inst_flow.get(t, {}).get('change', 0.0), 2),
        'inst_ratio': round(inst_flow.get(t, {}).get('ratio', 0.0), 2),
        'inst_label': inst_flow.get(t, {}).get('label', '⚪'),
        'news_score': round(news_sent.get(t, {}).get('score', 0.0), 2),
        'news_label': news_sent.get(t, {}).get('label', '⚪'),
        'suggested_entry': sig.get('entry_price'),
        'suggested_tp': sig.get('tp_price'),
        'suggested_sl': sig.get('sl_price'),
        'exit_date': sig.get('exit_date')
    })

print(json.dumps(results, ensure_ascii=False, indent=2))
