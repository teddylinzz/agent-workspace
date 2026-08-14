import os
import sys
import json
import re
import time
import webbrowser
from datetime import datetime, timedelta
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

import pandas as pd
import numpy as np
from dotenv import load_dotenv
from rich.console import Console
from rich.panel import Panel
from rich.table import Table
from rich.markdown import Markdown

from FinMind.data import DataLoader
from agent.llm import LLMClient

# Initialize Rich Console
console = Console()

# Tickers to Chinese Names Mapping
STOCK_NAMES = {
    # 電子/半導體
    "2330": "台積電", "2317": "鴻海", "2454": "聯發科", "2382": "廣達", "2308": "台達電",
    "2303": "聯電", "2357": "華碩", "3711": "日月光投控", "2379": "瑞昱", "2395": "研華",
    "2377": "微星", "2301": "光寶科", "2344": "華邦電", "3034": "聯詠", "2049": "上銀",
    # 金融
    "2891": "中信金", "2882": "國泰金", "2886": "兆豐金", "2884": "玉山金", "2885": "元大金",
    "2892": "第一金", "2880": "華南金", "2881": "富邦金", "5880": "合庫金", "2883": "凱基金",
    # 傳產/消費
    "1301": "台塑", "1303": "南亞", "6505": "台塑化", "2912": "統一超", "2207": "和泰車",
    "1216": "統一", "2105": "正新", "2002": "中鋼", "1402": "遠東新", "2603": "長榮",
    # 科技服務
    "3008": "大立光", "2409": "友達", "2408": "南亞科", "3481": "群創", "2376": "技嘉",
    "2352": "佳世達", "2327": "國巨", "2353": "宏碁", "3045": "台灣大", "4938": "和碩",
    # 其他大型股
    "2412": "中華電", "2474": "可成", "2615": "萬海", "2609": "陽明", "2610": "華航",
}

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

def chat_with_retry(llm, system, user, retries=5, delay=2.0, backoff=2.0):
    for i in range(retries):
        try:
            return llm.chat(system=system, user=user)
        except Exception as e:
            if i == retries - 1:
                raise e
            console.print(f"[yellow]⚠️ 語言模型呼叫失敗 ({e})，正在進行第 {i+1} 次重試，將等待 {delay} 秒...[/yellow]")
            time.sleep(delay)
            delay *= backoff

def fetch_stock_news(stock_id, stock_name):
    """Fetch recent news from Google News RSS."""
    query = urllib.parse.quote(f"{stock_id} {stock_name}")
    url = f"https://news.google.com/rss/search?q={query}&hl=zh-TW&gl=TW&ceid=TW:zh-Hant"
    
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as response:
            xml = response.read()
        root = ET.fromstring(xml)
        items = root.findall('.//item')[:5]  # Top 5 news articles
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

def main():
    load_dotenv()
    console.print(Panel("[bold green]🚀 啟動台股隔日焦點推薦分析系統[/bold green]"))
    
    # 1. Initialize FinMind Loader
    api = DataLoader()
    token = os.getenv("FINMIND_API_KEY", "")
    if token and not token.startswith("your-"):
        api.login_by_token(api_token=token)
        console.print("[dim]✓ 已登入 FinMind 資料服務[/dim]")
    else:
        console.print("[yellow]⚠️ 未設定有效的 FINMIND_API_KEY，將使用匿名限流模式下載數據[/yellow]")
        
    universe = list(STOCK_NAMES.keys())
    start_date_daily = get_start_date(40)  # Fetch last 40 days to calculate MAs
    
    # 2. Step 1: Download daily prices for all 50 stocks
    prices_data = {}
    with console.status("[bold magenta]正在抓取 50 檔台股日K線數據..."):
        for i, stock_id in enumerate(universe):
            try:
                df = fetch_finmind_with_retry(api.taiwan_stock_daily, stock_id=stock_id, start_date=start_date_daily)
                if not df.empty:
                    prices_data[stock_id] = df.sort_values("date").to_dict(orient="records")
            except Exception as e:
                console.print(f"[red]❌ 抓取 {stock_id} 股價失敗: {e}[/red]")
            time.sleep(0.3)  # Avoid rate limit
            
    if not prices_data:
        console.print("[bold red]❌ 未能下載到任何股價數據，請確認網路或 FinMind 資料服務狀態。[/bold red]")
        sys.exit(1)
        
    console.print(f"[green]✓ 已成功下載 {len(prices_data)} 檔股價資料[/green]")
    
    # 3. Calculate scores for initial technical screening
    scores = {}
    for stock_id, records in prices_data.items():
        if len(records) < 5:
            continue
        
        closes = [r["close"] for r in records]
        volumes = [r["Trading_Volume"] for r in records]
        
        latest_close = closes[-1]
        latest_vol = volumes[-1]
        
        # Calculate MAs
        ma5 = sum(closes[-5:]) / 5.0
        ma20 = sum(closes[-20:]) / len(closes[-20:]) if len(closes) >= 20 else sum(closes) / len(closes)
        
        # Calculate Volume ratio
        avg_vol_5 = sum(volumes[-6:-1]) / 5.0 if len(volumes) >= 6 else (sum(volumes[:-1]) / len(volumes[:-1]) if len(volumes) > 1 else latest_vol)
        vol_ratio = latest_vol / avg_vol_5 if avg_vol_5 > 0 else 1.0
        
        # Calculate Returns
        ret_5 = (latest_close - closes[-5]) / closes[-5] if len(closes) >= 5 else 0.0
        ret_1 = (latest_close - closes[-2]) / closes[-2] if len(closes) >= 2 else 0.0
        
        # Scoring heuristic
        score = 0.0
        if latest_close > ma5:
            score += 2.0
        if latest_close > ma20:
            score += 2.0
        if ma5 > ma20:
            score += 2.0
        if vol_ratio > 1.2:
            score += 2.0
        if vol_ratio > 1.5:
            score += 2.0
            
        score += ret_5 * 100.0  # Positive return is positive momentum
        
        scores[stock_id] = {
            "score": score,
            "latest_close": latest_close,
            "latest_volume": latest_vol,
            "ma5": ma5,
            "ma20": ma20,
            "vol_ratio": vol_ratio,
            "ret_5": ret_5,
            "ret_1": ret_1,
            "prices_history": [{
                "date": r["date"],
                "close": r["close"],
                "open": r["open"],
                "high": r["max"],
                "low": r["min"],
                "volume": r["Trading_Volume"]
            } for r in records[-15:]]  # last 15 days for UI chart
        }
        
    # Sort and pick top 10 stocks for deep analysis
    sorted_stocks = sorted(scores.items(), key=lambda x: x[1]["score"], reverse=True)
    top_10 = sorted_stocks[:10]
    
    console.print("\n[bold cyan]📊 初選技術面與動能前 10 檔候選股：[/bold cyan]")
    candidate_table = Table(show_header=True, header_style="bold magenta")
    candidate_table.add_column("排名", style="dim", width=4)
    candidate_table.add_column("代碼", style="cyan")
    candidate_table.add_column("名稱", style="bold white")
    candidate_table.add_column("收盤價", justify="right")
    candidate_table.add_column("5日漲跌幅", justify="right")
    candidate_table.add_column("量增比率", justify="right")
    candidate_table.add_column("技術評分", justify="right", style="green")
    
    for idx, (stock_id, info) in enumerate(top_10):
        stock_name = STOCK_NAMES.get(stock_id, "未知")
        candidate_table.add_row(
            str(idx+1),
            stock_id,
            stock_name,
            f"{info['latest_close']:.2f}",
            f"{info['ret_5']*100:.2f}%",
            f"{info['vol_ratio']:.2f} 倍",
            f"{info['score']:.1f}"
        )
    console.print(candidate_table)
    
    # 4. Step 2: Fetch detailed indicators for the top 10 stocks
    detailed_data = {}
    start_date_detailed = get_start_date(20)  # Last 20 days
    start_date_revenue = get_start_date(540)  # Last 18 months for revenue YoY
    
    console.print("\n[bold magenta]正在抓取前 10 檔候選股的籌碼、資券、基本面與新聞...[/bold magenta]")
    for idx, (stock_id, info) in enumerate(top_10):
        stock_name = STOCK_NAMES.get(stock_id, "未知")
        console.print(f"[{idx+1}/10] 抓取 {stock_id} {stock_name} 的詳細資料...")
        
        # 4.1 Institutional Net Buying
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
            console.print(f"  [yellow]⚠️ 籌碼資料抓取失敗: {e}[/yellow]")
            
        time.sleep(0.3)
        
        # 4.2 Margin Trading
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
            console.print(f"  [yellow]⚠️ 資券資料抓取失敗: {e}[/yellow]")
            
        time.sleep(0.3)
        
        # 4.3 PE/PB Ratio
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
            console.print(f"  [yellow]⚠️ 估值資料抓取失敗: {e}[/yellow]")
            
        time.sleep(0.3)
        
        # 4.4 Monthly Revenue YoY
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
            console.print(f"  [yellow]⚠️ 營收資料抓取失敗: {e}[/yellow]")
            
        time.sleep(0.3)
        
        # 4.5 Fetch News
        news = fetch_stock_news(stock_id, stock_name)
        
        detailed_data[stock_id] = {
            "stock_id": stock_id,
            "stock_name": stock_name,
            "technical": info,
            "institutional": inst_list,
            "margin": margin_list,
            "pe_pb": pe_list,
            "revenue": revenue_list,
            "news": news
        }
        
    # 5. Build prompt for the LLM
    console.print("\n[bold cyan]🤖 正在將彙整資料送交人工智慧進行深度綜合評分與排盤...[/bold cyan]")
    
    current_time_str = datetime.now().strftime("%Y-%m-%d")
    
    data_summary = ""
    for stock_id, data in detailed_data.items():
        data_summary += f"=== 股票：{stock_id} {data['stock_name']} ===\n"
        data_summary += f"【技術與價格】\n"
        data_summary += f" - 收盤價: {data['technical']['latest_close']:.2f}, 5日均線: {data['technical']['ma5']:.2f}, 20日均線: {data['technical']['ma20']:.2f}\n"
        data_summary += f" - 今日成交量比昨日均量增加: {(data['technical']['vol_ratio'] - 1.0)*100:.1f}%\n"
        data_summary += f" - 5日累計漲跌幅: {data['technical']['ret_5']*100:.2f}%, 1日漲跌幅: {data['technical']['ret_1']*100:.2f}%\n"
        
        if data['institutional']:
            latest_inst = data['institutional'][-1]
            data_summary += f"【籌碼流向 (今日)】\n"
            data_summary += f" - 外資買賣超: {latest_inst['foreign_net']/1000:.1f}張, 投信買賣超: {latest_inst['trust_net']/1000:.1f}張, 自營商買賣超: {latest_inst['dealer_net']/1000:.1f}張\n"
            # 5-day net buy sum
            f_5d = sum(d['foreign_net'] for d in data['institutional'][-5:])
            t_5d = sum(d['trust_net'] for d in data['institutional'][-5:])
            data_summary += f" - 近5日累計：外資 {f_5d/1000:.1f}張, 投信 {t_5d/1000:.1f}張\n"
            
        if data['margin']:
            latest_margin = data['margin'][-1]
            data_summary += f"【信用交易資券關係 (今日)】\n"
            data_summary += f" - 融資餘額變動: {latest_margin['margin_change']}張, 融券餘額變動: {latest_margin['short_change']}張\n"
            
        if data['pe_pb']:
            latest_pe = data['pe_pb'][-1]
            data_summary += f"【基本估值】\n"
            data_summary += f" - 本益比(PE): {latest_pe['pe']:.2f}, 股價淨值比(PB): {latest_pe['pb']:.2f}, 預估殖利率: {latest_pe['yield']:.2f}%\n"
            
        if data['revenue']:
            latest_rev = data['revenue'][-1]
            data_summary += f"【營收表現 (最新月營收)】\n"
            data_summary += f" - 月營收年增率: {latest_rev['yoy']:.2f}%\n"
            
        data_summary += f"【近期相關新聞標題與焦點】\n"
        for idx_news, item in enumerate(data['news']):
            data_summary += f" - 新聞 {idx_news+1}: {item['title']} ({item['date']})\n"
        data_summary += "\n"
        
    system_prompt_json = """你是一位專業的台股量化與輿情分析專家。你將分析所提供的10檔候選台股數據，挑選出最適合隔日買進或密切關注的前5檔股票。

请输出一个且仅输出一個 JSON 區塊（必須用 ```json 標記包裹），結構如下：
{
  "date": "2026-06-04",
  "recommendations": [
    {
      "rank": 1,
      "stock_id": "股票代碼",
      "stock_name": "股票名稱",
      "action": "買進" 或 "密切關注",
      "reason": "挑選原因（限 40 字以內）",
      "action_reason": "建議此操作的決策原因（例如為什麼建議買進或僅密切關注，限 50 字以內）",
      "technical_analysis": "技術面分析（限 60 字以內）",
      "flow_analysis": "籌碼面分析（限 60 字以內）",
      "sentiment_analysis": "輿情分析（限 60 字以內）",
      "entry_range": "建議買進區間",
      "target_price": "目標價",
      "stop_loss": "停損價",
      "risk_warning": "風險提示（限 60 字以內）",
      "strategy_normal": "正常震盪於建議區間時的佈局策略（限 60 字以內）",
      "strategy_limit_up": "明日開盤即漲停或快速拉漲停時的應對方針（限 60 字以內）",
      "strategy_limit_down": "明日大跌或跌停時的防守或放棄方針（限 60 字以內）"
    },
    ...
  ]
}

重要規則：
1. 不要輸出任何 JSON 區塊以外的文字、說明或額外的 Markdown 內容。
2. 必須以臺灣慣用的繁體中文填寫 JSON 內的所有文字欄位，不得使用簡體中文。
3. 嚴格遵守各欄位的字數限制，保持內容簡潔精煉。
4. 除股票代碼、公司正式名稱或無通用中文譯名的專有名詞外，避免使用英文與英文縮寫。
"""

    user_prompt = f"以下是今日 {current_time_str} 的候選股票詳細分析數據：\n\n{data_summary}\n\n請挑選出前五名股票並僅以 JSON 格式回應。"

    llm = LLMClient()
    
    # 5.1 Call LLM to get JSON data
    response_json = chat_with_retry(
        llm=llm,
        system=system_prompt_json,
        user=user_prompt
    )
    response_json_text = response_json.choices[0].message.content
    
    # 6. Parse response to extract JSON data
    json_data = None
    
    match = re.search(r"```json\s*(.*?)\s*```", response_json_text, re.DOTALL)
    if match:
        try:
            json_data = json.loads(match.group(1))
        except Exception as e:
            console.print(f"[red]❌ 解析人工智慧回傳的結構化資料失敗: {e}[/red]")
            
    if not json_data:
        # Fallback if no code block but raw text looks like JSON
        try:
            start_idx = response_json_text.find('{')
            end_idx = response_json_text.rfind('}')
            if start_idx != -1 and end_idx != -1:
                json_str = response_json_text[start_idx:end_idx+1]
                json_data = json.loads(json_str)
        except Exception:
            pass
            
    # If JSON parse was successful, write data.js for the dashboard
    markdown_report = ""
    if json_data:
        # Generate Markdown Report based on JSON recommendations
        console.print("[green]✓ 成功取得結構化推薦資料，正在撰寫詳細分析報告...[/green]")
        system_prompt_report = """你是一位專業的台股量化與輿情分析專家。請根據提供的前五名股票推薦 JSON 數據，撰寫一份詳細的「台股隔日焦點研究報告」，供使用者閱讀。

報告應使用 Markdown 格式，包含：
1. 簡短的台股大盤市場情緒與近期趨勢摘要。
2. 前五檔股票的詳細排行與分析重點，以清楚的標題及項目符號呈現。
3. 針對每檔個股，特別提供具體的「隔日應對購買策略」，包含：
   - 盤中正常震盪於「建議進場區間」時的分批佈局方式。
   - 若明日開盤即強勢漲停鎖死（或開盤後快速拉漲停）的應對方針。
   - 若明日因大盤大跌或個股爆利空而急跌、甚至打至跌停時的防守或放棄方針。
4. 風險警示與免責聲明。

文字規則：
1. 全文必須使用臺灣慣用的繁體中文，不得使用簡體中文。
2. 除股票代碼、公司正式名稱或無通用中文譯名的專有名詞外，不得使用英文或英文縮寫；例如應寫「本益比」、「股價淨值比」、「年增率」與「人工智慧」。
3. 標題、欄位名稱及說明文字皆須使用繁體中文。
4. 採取專業、客觀、精煉的研究報告語氣，不使用煽動性買賣措辭。
"""
        user_prompt_report = f"以下是已經挑選出的前五檔隔日看多焦點推薦股票資料：\n\n{json.dumps(json_data, ensure_ascii=False, indent=2)}\n\n請根據以上 JSON 數據生成完整的 Markdown 分析報告。"
        
        response_report = chat_with_retry(
            llm=llm,
            system=system_prompt_report,
            user=user_prompt_report
        )
        markdown_report = response_report.choices[0].message.content

        # Enrich json_data with stock historic prices & flow data for charts
        for rec in json_data.get("recommendations", []):
            stock_id = rec.get("stock_id")
            if stock_id in detailed_data:
                orig_data = detailed_data[stock_id]
                rec["price_history"] = orig_data["technical"]["prices_history"]
                rec["institutional_history"] = orig_data["institutional"]
                rec["margin_history"] = orig_data["margin"]
                rec["pe_pb_history"] = orig_data["pe_pb"]
                rec["revenue_history"] = orig_data["revenue"]
                rec["news"] = orig_data["news"]
                
        # Write to data.js
        data_js_content = f"window.RECOMMENDATIONS_DATA = {json.dumps(json_data, ensure_ascii=False, indent=2)};"
        with open("data.js", "w", encoding="utf-8") as f:
            f.write(data_js_content)
        console.print("[green]✓ 數據成功寫入 data.js[/green]")
    else:
        console.print("[red]❌ 無法提取結構化數據，將無法在網頁版儀表板展示圖表，僅輸出終端報告。[/red]")
        console.print(f"[yellow]語言模型原始回應：[/yellow]\n{response_json_text}\n")
        markdown_report = "推薦選股系統執行失敗，請檢查資料獲取或語言模型設定。"
        
    # 7. Print Report in CLI
    console.print(Panel(Markdown(markdown_report), title="📊 台股隔日焦點推薦報告", border_style="cyan"))
    
    # 8. Open the web browser dashboard if index.html exists
    if os.path.exists("dashboard.html"):
        console.print("[bold green]✓ 正在為您開啟網頁版互動式分析儀表板...[/bold green]")
        webbrowser.open('file://' + os.path.abspath('dashboard.html'))
    else:
        console.print("[yellow]⚠️ 儀表板檔案不存在，請先生成網頁版儀表板。[/yellow]")

if __name__ == "__main__":
    main()
