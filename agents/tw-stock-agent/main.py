import sys
import os
from dotenv import load_dotenv
from prompt_toolkit import PromptSession
from prompt_toolkit.history import InMemoryHistory
from rich.console import Console
from rich.panel import Panel
from rich.theme import Theme
from rich.markdown import Markdown

from agent.tw_stock_agent import TWStockAgent

theme = Theme(
    {
        "info": "cyan",
        "warning": "yellow",
        "stage": "bold magenta",
    }
)
console = Console(theme=theme)

BANNER = r"""
  _____ __        __  ____  _                  _                 
 |_   _|\ \      / / / ___|| |_  ___   ___  __| | __ ___  _ __ 
   | |   \ \ /\ / /  \___ \| __|/ _ \ / __|/ _` |/ _` \ \/ / '_ \ 
   | |    \ V  V /    ___) | |_| (_) | (__| (_| | (_| |>  <| | | |
   |_|     \_/\_/    |____/ \__|\___/ \___|\__,_|\__,_/_/\_\_| |_|
"""

def main():
    load_dotenv()
    console.print(Panel(BANNER, style="bold green", subtitle="TW Stock Momentum Trading AI Agent v1.0.0"))
    console.print("[dim]輸入投資分析問題，或輸入 /help 查看可用指令、/quit 離開[/dim]\n")
    console.print("[dim]推薦指令: /run (執行交易信號審查) | /regime (大盤狀態) | /sentiment (新聞情緒)[/dim]\n")

    try:
        agent = TWStockAgent(console)
    except Exception as e:
        console.print(f"[red]❌ 初始化交易 Agent 失敗: {e}[/red]")
        sys.exit(1)

    session = PromptSession(history=InMemoryHistory())

    while True:
        try:
            query = session.prompt("tw-stock-agent >> ")
        except (KeyboardInterrupt, EOFError):
            console.print("\n[dim]Bye![/dim]")
            sys.exit(0)

        query = query.strip()
        if not query:
            continue

        if query == "/quit":
            console.print("[dim]Bye![/dim]")
            break

        if query == "/help":
            console.print(
                Panel(
                    "[bold]/run[/bold]                  - 啟動 AI 交易信號大盤與新聞情緒多維審查，並更新信號檔案\n"
                    "[bold]/regime[/bold]               - 讀取 stock_report.html 取得今日大盤 Regime 狀態與指標\n"
                    "[bold]/sentiment[/bold] [dim]<days>[/dim]   - 抓取近期 (預設 5 天) 新聞情緒排行榜\n"
                    "[bold]/signals[/bold]             - 讀取當前 paper_signals.json 的交易信號\n"
                    "[bold]/history[/bold] [dim]<ticker> <pd>[/dim] - 查詢個股 (例如 2330) 近期日Ｋ量價 (pd 預設 '1mo')\n"
                    "[bold]/quit[/bold]                 - 離開程式\n"
                    "[bold]/help[/bold]                 - 顯示此說明說明\n\n"
                    "── 自然語言直接提問（AI Agent 自動調用工具決策） ──\n"
                    '  "分析目前大盤處於多頭還是空頭？"\n'
                    '  "比對 3481 這檔股票最近的情緒如何？"\n'
                    '  "幫我看看 2303 過去一個月的股價走勢"',
                    title="Help 指令說明",
                    border_style="cyan"
                )
            )
            continue

        if query == "/run":
            agent.run_audit()
            console.print()
            continue

        if query == "/regime":
            res = agent.regime_tool.get_market_regime()
            console.print(Markdown(res))
            console.print()
            continue

        if query.startswith("/sentiment"):
            parts = query.split()
            days = 5
            if len(parts) > 1:
                try:
                    days = int(parts[1])
                except ValueError:
                    console.print("[yellow]時間天數必須為整數。使用預設值 5 天。[/yellow]")
            
            with console.status(f"[bold magenta]📰 正在抓取近 {days} 天的新聞情緒資料...[/bold magenta]"):
                res = agent.sentiment_tool.get_news_sentiment(days)
            console.print(Markdown(res))
            console.print()
            continue

        if query == "/signals":
            res = agent.signals_tool.get_paper_signals()
            console.print(Panel(res, title="paper_signals.json", border_style="cyan"))
            console.print()
            continue

        if query.startswith("/history"):
            parts = query.split()
            if len(parts) < 2:
                console.print("[yellow]用法: /history <股票代碼> [查詢週期]\n例如: /history 2330 1mo[/yellow]")
                continue
            ticker = parts[1]
            period = parts[2] if len(parts) > 2 else "1mo"
            
            with console.status(f"[bold magenta]📈 正在查詢 {ticker} ({period}) 的歷史量價走勢...[/bold magenta]"):
                res = agent.yfinance_tool.get_stock_history(ticker, period)
            console.print(Markdown(res))
            console.print()
            continue

        # If it's a general natural language query, let the agent think and solve it!
        agent.run_audit(query)
        console.print()

if __name__ == "__main__":
    main()
