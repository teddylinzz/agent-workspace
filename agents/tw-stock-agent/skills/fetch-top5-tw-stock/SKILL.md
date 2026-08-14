---
name: fetch-top5-tw-stock
description: Fetch, analyze and construct the top 5 Taiwan stock watchlist/recommendations for the next trading day. Trigger when the user wants next-day Taiwan stock recommendations, top stocks to watch, stock selection report based on momentum indicators, institutional flows, and news sentiment.
---

# Fetch Top 5 Taiwan Stock Watchlist

Use this skill when the user asks to build or generate a Taiwan stock watchlist, recommendation list, or stock selection analysis for the next trading day. It automates running the quantitative pipeline, fetching live technical details, merging institutional holdings, and doing web search analysis to pick the top 5 stocks.

## 📋 Steps to Execute

### 1. Run the Data Enrichment Script
First, run the bundled helper script to execute the quantitative trading pipeline, calculate momentum indicators, fetch live price and volume data, and compute institutional flows:

```bash
# Locate TW_STOCKER_PATH from .env first, then run using the virtual environment python
./.venv/bin/python skills/fetch-top5-tw-stock/scripts/fetch_details.py
```

This script will output a JSON list of all today's active trading signals and their technical metadata:
- Today's open, high, low, close, change percentage, volume, volume MA20, RSI, ATR.
- Technical trend (Bullish/Bearish/Consolidating).
- Enriched entry, stop-profit (TP), stop-loss (SL) price targets.
- 20-day institutional flow change percentage and detailed ratios (foreign, trust, dealer).

### 2. Search for Recent News and Analyst Estimates
For each candidate stock output by the script, perform a web search to collect recent headlines and fundamentals:
- Search pattern: `[Stock Name] [Ticker] 新聞 2026` or `[Ticker] 營收 籌碼`
- Look for:
  - Latest monthly revenue reports (YoY or MoM growth).
  - Business catalysts (e.g., AI server growth, Computex orders, new technology rollouts like FOPLP).
  - Analyst ratings and target prices (e.g., FactSet consensus, broker reports).
  - Regulatory notices: check if the stock is marked as an **attention stock (注意股)** or **disposition/disposed stock (處置股)**.

### 3. Filter and Select the Top 5
Filter the candidate list down to the best 5 stocks for tomorrow's trading day based on these rules:
- **Exclude / Flag Disposed Stocks**: If a stock is currently in disposition status (每 5 分鐘/每 20 分鐘人工撮合), it has highly restricted liquidity. Exclude it from the top 5 or mark it as extremely high risk.
- **Filter Out Limit-Down Panic**: If a stock closed at limit-down (-9.99%) on heavy volume, do not recommend buying it immediately tomorrow. Wait for stabilization.
- **Prioritize Strong Chip Flow**: Focus on stocks with high institutional buying (20-day ratio change > +2.0%, or labeled as `大買` or `小買`).
- **Focus on Technical Trend**: Select stocks where the trend is `Bullish` (close > 20MA > 60MA) and RSI is not excessively overbought (e.g., RSI < 85).

### 4. Create the HTML Analysis Artifact
Write a comprehensive, premium HTML report to the user's artifact directory as an HTML file (e.g., `/Users/ted/.gemini/antigravity-cli/brain/[conversation-id]/watch_list_analysis.html`). Do NOT write a markdown file.

The HTML file must be self-contained (all styles inside a `<style>` block) and present the analysis in a stunning dashboard. Use the following design specifications:
- **Font**: Use Google Font `Inter` or `Outfit` (`https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap`).
- **Color Palette**: 
  - Dark Mode background: `#0f172a` (Slate 900)
  - Card/Section backgrounds: `#1e293b` (Slate 800)
  - Text primary: `#f8fafc` (Slate 50), secondary: `#94a3b8` (Slate 400)
  - Green (Buy / High Momentum): `#10b981` (Emerald 500)
  - Red (Stop Loss / Exclusion): `#ef4444` (Red 500)
  - Orange (Warning / Pullback): `#f59e0b` (Amber 500)
- **Layout & Structure**:
  1. **Dashboard Header**: Presenting title, run timestamp, and an **Overall Market Regime** badge (e.g., "Bullish Pullback", "50% Exposure Limit").
  2. **Watchlist Summary Table**: A clean table with columns: Rank, Ticker, Name, Close Price, Suggested Entry, Target Profit (TP), Stop Loss (SL), 20d Institutional Flow, News Sentiment, Decision/Rating. Use colored badges for the Decision (e.g. green background for "Strong Buy").
  3. **Individual Stock Cards**: Grid or stacked cards for the top 5 stocks containing:
     - Ticker, Name, and Close Price in a large bold header.
     - Technical indicators block (Close vs MAs, RSI, ATR) formatted with a clean layout.
     - Institutional flow data block.
     - Fundamentals & news catalyst summary.
     - Execution playbook (exact triggers, TP/SL).
  4. **Exclusions & High-Risk Log**: A warning-colored callout panel explaining why certain stocks were excluded (e.g., 3481 in disposition, 2324 limit down).
  5. **Disclaimer Footer**: Clean, centered text.

### 5. Final Response
Point the user to the generated HTML artifact link. Since the artifact is an HTML file, the user can open it in any browser to review the visual dashboard. Provide a very brief summary of the top 3 recommendations in the final chat response.
