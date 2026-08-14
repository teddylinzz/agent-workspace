import os
import sys
import json
import re
import time
from datetime import datetime, timedelta
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

from dotenv import load_dotenv
from rich.console import Console
from rich.panel import Panel
from rich.markdown import Markdown

from FinMind.data import DataLoader
from agent.llm import LLMClient

console = Console()

def get_start_date(days: int = 30) -> str:
    return (datetime.now() - timedelta(days=days)).strftime("%Y-%m-%d")

def fetch_finmind_with_retry(api_func, *args, **kwargs):
    max_retries = 3
    delay = 1.5
    for i in range(max_retries):
        try:
            return api_func(*args, **kwargs)
        except Exception as e:
            if i == max_retries - 1:
                raise e
            time.sleep(delay)
            delay *= 2.0

def fetch_stock_news(stock_id):
    """Fetch recent news from Google News RSS."""
    query = urllib.parse.quote(f"{stock_id} 股票")
    url = f"https://news.google.com/rss/search?q={query}&hl=zh-TW&gl=TW&ceid=TW:zh-Hant"
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as response:
            xml = response.read()
        root = ET.fromstring(xml)
        items = root.findall('.//item')[:8]  # Top 8 news articles
        news_list = []
        for item in items:
            title = item.find('title').text
            pub_date = item.find('pubDate').text
            news_list.append({
                "title": title,
                "date": pub_date
            })
        return news_list
    except Exception as e:
        return [{"title": f"無法取得新聞：{str(e)}", "date": ""}]

def chat_with_retry(llm, system, user, retries=5, delay=2.0, backoff=2.0):
    for i in range(retries):
        try:
            return llm.chat(system=system, user=user)
        except Exception as e:
            if i == retries - 1:
                raise e
            console.print(f"[yellow]⚠️ LLM 呼叫失敗 ({e})，正在進行第 {i+1} 次重試，將等待 {delay} 秒...[/yellow]")
            time.sleep(delay)
            delay *= backoff

def fetch_prices_from_yahoo(stock_id, days=40):
    import requests
    from datetime import datetime, timedelta
    symbol = f"{stock_id}.TW"
    end_dt = datetime.now()
    start_dt = end_dt - timedelta(days=days)
    
    period1 = int(start_dt.timestamp())
    period2 = int(end_dt.timestamp())
    
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}?period1={period1}&period2={period2}&interval=1d"
    headers = {"User-Agent": "Mozilla/5.0"}
    
    r = requests.get(url, headers=headers)
    if r.status_code != 200:
        symbol = f"{stock_id}.TWO"
        url = f"https://query1.finance.yahoo.com/v8/finance/chart/{symbol}?period1={period1}&period2={period2}&interval=1d"
        r = requests.get(url, headers=headers)
        if r.status_code != 200:
            raise RuntimeError(f"Yahoo Finance returned status {r.status_code} for {stock_id}")
            
    result = r.json()["chart"]["result"][0]
    timestamps = result.get("timestamp", [])
    quotes = result["indicators"]["quote"][0]
    
    prices = []
    for i, ts in enumerate(timestamps):
        date_str = datetime.fromtimestamp(ts).strftime("%Y-%m-%d")
        close = quotes["close"][i]
        open_val = quotes["open"][i]
        high = quotes["high"][i]
        low = quotes["low"][i]
        vol = quotes["volume"][i]
        
        if close is None or open_val is None:
            continue
            
        prices.append({
            "date": date_str,
            "stock_id": stock_id,
            "close": float(close),
            "open": float(open_val),
            "max": float(high),
            "min": float(low),
            "Trading_Volume": int(vol) if vol else 0
        })
    return prices

def main():
    load_dotenv()
    
    stock_id = sys.argv[1] if len(sys.argv) > 1 else "1477"
    stock_id = stock_id.strip()
    
    console.print(Panel(f"[bold cyan]🔍 開始進行個股深度分析：{stock_id}[/bold cyan]"))
    
    # Initialize FinMind Loader
    api = DataLoader()
    token = os.getenv("FINMIND_API_KEY", "")
    if token and not token.startswith("your-"):
        api.login_by_token(api_token=token)
        
    start_date_daily = get_start_date(40)
    start_date_detailed = get_start_date(20)
    start_date_revenue = get_start_date(540)
    
    # 1. Fetch Price data
    prices = []
    try:
        df = fetch_finmind_with_retry(api.taiwan_stock_daily, stock_id=stock_id, start_date=start_date_daily)
        if not df.empty:
            prices = df.sort_values("date").to_dict(orient="records")
    except Exception as e:
        console.print(f"[yellow]⚠️ FinMind 抓取股價失敗 ({e})，正在嘗試從 Yahoo Finance 獲取備用數據...[/yellow]")
        try:
            prices = fetch_prices_from_yahoo(stock_id, days=40)
            console.print("[green]✓ 成功從 Yahoo Finance 獲取股價數據！[/green]")
        except Exception as ye:
            console.print(f"[red]❌ 抓取 Yahoo 股價資料也失敗: {ye}[/red]")
            sys.exit(1)
        
    if not prices:
        console.print(f"[red]❌ 未能獲取 {stock_id} 股價資料，可能該代碼無效或已下市。[/red]")
        sys.exit(1)
        
    latest_close = prices[-1]["close"]
    
    # Calculate simple MAs
    closes = [p["close"] for p in prices]
    ma5 = sum(closes[-5:]) / 5.0
    ma20 = sum(closes[-20:]) / len(closes[-20:]) if len(closes) >= 20 else sum(closes) / len(closes)
    
    # 2. Fetch Institutional Net Buying
    inst_list = []
    try:
        df_inst = fetch_finmind_with_retry(api.taiwan_stock_institutional_investors, stock_id=stock_id, start_date=start_date_detailed)
        if not df_inst.empty:
            df_inst["net_buy"] = df_inst["buy"] - df_inst["sell"]
            pivot = df_inst.pivot_table(index="date", columns="name", values="net_buy", aggfunc="sum").fillna(0)
            for date, row in pivot.iterrows():
                inst_list.append({
                    "date": date,
                    "foreign_net": int(row.get("Foreign_Investor", 0)),
                    "trust_net": int(row.get("Investment_Trust", 0)),
                    "dealer_net": int(row.get("Dealer_self", 0) + row.get("Dealer_Hedging", 0))
                })
            inst_list = sorted(inst_list, key=lambda x: x["date"])[-10:]
    except Exception as e:
        console.print(f"[yellow]⚠️ 籌碼資料抓取失敗: {e}[/yellow]")
        
    # 3. Fetch Margin Trading
    margin_list = []
    try:
        df_margin = fetch_finmind_with_retry(api.taiwan_stock_margin_purchase_short_sale, stock_id=stock_id, start_date=start_date_detailed)
        if not df_margin.empty:
            for _, row in df_margin.iterrows():
                margin_list.append({
                    "date": row["date"],
                    "margin_balance": int(row["MarginPurchaseTodayBalance"]),
                    "short_balance": int(row["ShortSaleTodayBalance"]),
                    "margin_change": int(row["MarginPurchaseBuy"]) - int(row["MarginPurchaseSell"]) - int(row["MarginPurchaseCashRepayment"]),
                    "short_change": int(row["ShortSaleBuy"]) - int(row["ShortSaleSell"]) - int(row["ShortSaleCashRepayment"])
                })
            margin_list = sorted(margin_list, key=lambda x: x["date"])[-10:]
    except Exception as e:
        console.print(f"[yellow]⚠️ 資券資料抓取失敗: {e}[/yellow]")
        
    # 4. Fetch PE/PB
    pe_list = []
    try:
        df_pe = fetch_finmind_with_retry(api.taiwan_stock_per_pbr, stock_id=stock_id, start_date=start_date_detailed)
        if not df_pe.empty:
            for _, row in df_pe.iterrows():
                pe_list.append({
                    "date": row["date"],
                    "pe": float(row.get("PER", 0)),
                    "pb": float(row.get("PBR", 0)),
                    "yield": float(row.get("dividend_yield", 0))
                })
            pe_list = sorted(pe_list, key=lambda x: x["date"])[-10:]
    except Exception as e:
        console.print(f"[yellow]⚠️ 估值資料抓取失敗: {e}[/yellow]")
        
    # 5. Fetch Revenue
    revenue_list = []
    try:
        df_rev = fetch_finmind_with_retry(api.taiwan_stock_month_revenue, stock_id=stock_id, start_date=start_date_revenue)
        if not df_rev.empty:
            df_rev = df_rev.sort_values("date")
            for _, row in df_rev.iterrows():
                rev = float(row["revenue"])
                curr_y = int(row["revenue_year"])
                curr_m = int(row["revenue_month"])
                
                yoy = 0.0
                prev_row = df_rev[(df_rev["revenue_year"] == curr_y - 1) & (df_rev["revenue_month"] == curr_m)]
                if not prev_row.empty:
                    prev_rev = float(prev_row.iloc[0]["revenue"])
                    if prev_rev > 0:
                        yoy = (rev - prev_rev) / prev_rev * 100.0
                        
                revenue_list.append({
                    "year": curr_y,
                    "month": curr_m,
                    "revenue": rev,
                    "yoy": yoy
                })
            revenue_list = revenue_list[-6:]
    except Exception as e:
        console.print(f"[yellow]⚠️ 營收資料抓取失敗: {e}[/yellow]")
        
    # 6. Fetch News
    news = fetch_stock_news(stock_id)
    
    # 7. Compile prompt data summary
    data_summary = f"=== 股票：{stock_id} ===\n"
    data_summary += f"【最新價格與技術均線】\n"
    data_summary += f" - 收盤價: {latest_close:.2f}, 5日均線: {ma5:.2f}, 20日均線: {ma20:.2f}\n"
    data_summary += f" - 最近五日價格歷史: {', '.join([str(p['close']) for p in prices[-5:]])}\n"
    
    if inst_list:
        latest_inst = inst_list[-1]
        data_summary += f"【今日三大法人買賣超】\n"
        data_summary += f" - 外資買賣超: {latest_inst['foreign_net']/1000:.1f}張, 投信買賣超: {latest_inst['trust_net']/1000:.1f}張, 自營商買賣超: {latest_inst['dealer_net']/1000:.1f}張\n"
        f_5d = sum(d['foreign_net'] for d in inst_list[-5:])
        t_5d = sum(d['trust_net'] for d in inst_list[-5:])
        data_summary += f" - 近5日累計法人買賣：外資 {f_5d/1000:.1f}張, 投信 {t_5d/1000:.1f}張\n"
        
    if margin_list:
        latest_margin = margin_list[-1]
        data_summary += f"【今日資券變動】\n"
        data_summary += f" - 融資餘額變動: {latest_margin['margin_change']}張, 融券餘額變動: {latest_margin['short_change']}張\n"
        
    if pe_list:
        latest_pe = pe_list[-1]
        data_summary += f"【估值與本益比】\n"
        data_summary += f" - 本益比(PE): {latest_pe['pe']:.2f}, 股價淨值比(PB): {latest_pe['pb']:.2f}, 殖利率: {latest_pe['yield']:.2f}%\n"
        
    if revenue_list:
        latest_rev = revenue_list[-1]
        data_summary += f"【月營收表現】\n"
        data_summary += f" - 最新月份營收 YoY 年增率: {latest_rev['yoy']:.2f}%\n"
        data_summary += f" - 近期六個月營收 YoY 年增率歷史: {', '.join([f'{r['yoy']:.1f}%' for r in revenue_list])}\n"
        
    data_summary += f"【近期新聞動態與標題】\n"
    for idx, item in enumerate(news):
        data_summary += f" - 新聞 {idx+1}: {item['title']} ({item['date']})\n"
        
    # 8. LLM Call
    system_prompt = """你是一位專業的台股資深證券研究員與風險分析師。請根據提供的一檔台股數據，撰寫一份極具深度、客觀且結構嚴謹的個股分析評估報告。

報告必須包含以下部分，以繁體中文 Markdown 格式撰寫：
1. 【公司簡介與基本面概況】：推斷或說明這家公司的核心業務，以及最新月營收趨勢的評估。
2. 【技術面分析】：分析收盤價相較於5日、20日均線的位階，近期股價K線趨勢，量能是否溫和配合。
3. 【籌碼面分析】：剖析三大法人（特別是外資與投信）的近日流向，以及資券結構對股價的影響評估。
4. 【最新輿情與催化劑】：分析新聞事件帶來的短線市場情緒（偏向正面或偏向審慎），以及未來的觀察重點。
5. 【技術面壓力與支撐分析】：
   - 給出中立的觀察評等（偏多觀察 / 中性觀察 / 偏空觀察）。
   - 分析近期波段的「支撐區間」與「壓力區間」。
   - 提供「支撐參考位」與「壓力參考位」（作為風險控制與趨勢判斷指標，代替停損與目標價字眼）。
6. 【潛在風險提醒】：列出產業、營運、市場或政策面之警示事項。

重要規則：
- 嚴禁提供直接的買賣點位、投資顧問建議或任何獲利保證。
- 所有分析與描述必須保持中立、客觀與學術研究性質。
- 報告結尾必須註明「本報告由 AI 彙整歷史數據生成，僅供研究參考，不代表任何實際投資建議，投資人應獨立評估風險並審慎操作。」
"""

    llm = LLMClient()
    with console.status("[bold magenta]正在請 AI 分析數據並撰寫個股研究報告..."):
        response = chat_with_retry(
            llm=llm,
            system=system_prompt,
            user=f"以下是這檔股票今日的詳細量化與輿情數據：\n\n{data_summary}\n\n請開始撰寫研究報告。"
        )
        
    report = response.choices[0].message.content
    
    # Save report as artifact
    artifact_filename = f"stock_analysis_{stock_id}.md"
    # Write directly to artifact directory if possible
    # We will write in the workspace and let the model guide the user to it
    with open(artifact_filename, "w", encoding="utf-8") as f:
        f.write(report)
        
    console.print(Panel(Markdown(report), title=f"📊 {stock_id} 個股研究報告", border_style="cyan"))
    console.print(f"[green]✓ 個股研究報告已儲存至：{os.path.abspath(artifact_filename)}[/green]\n")

if __name__ == "__main__":
    main()
