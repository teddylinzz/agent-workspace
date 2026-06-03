import os
import re
import json
import csv
import io
import urllib.request
from datetime import datetime
import yfinance as yf

def get_workspace_path():
    """Get the path to the tw_stocker workspace from environment variables."""
    return os.getenv("TW_STOCKER_PATH", "/Users/ted/workspace/tw_stocker").strip()

class MarketRegimeTool:
    """Tool to parse market regime status and key metrics from stock_report.html."""

    def get_market_regime(self) -> str:
        """解析當前大盤狀態與策略各項績效指標（來自 stock_report.html）。"""
        workspace = get_workspace_path()
        report_path = os.path.join(workspace, "stock_report.html")

        if not os.path.exists(report_path):
            return f"❌ 找不到報表檔案：{report_path}。請確認 TW_STOCKER_PATH 是否設定正確。"

        try:
            with open(report_path, "r", encoding="utf-8") as f:
                html = f.read()

            # 1. Parse Report Date
            date_match = re.search(r'報表日期:\s*([^\s&|]+)', html)
            report_date = date_match.group(1).strip() if date_match else "未知日期"

            # 2. Parse Market Regime
            regime = "未知"
            regime_match = re.search(
                r'<div class="label">大盤 Regime</div>\s*<div class="value"[^>]*>\s*([^\s<]+)', 
                html
            )
            if regime_match:
                regime = regime_match.group(1).strip()

            # 3. Parse General Stat Cards
            # This captures labels and their values in stat cards
            stat_cards = {}
            card_matches = re.finditer(
                r'<div class="stat-card[^"]*">\s*<div class="label">([^<]+)</div>\s*<div class="value"[^>]*>([^<]+)</div>',
                html
            )
            for m in card_matches:
                label = m.group(1).strip()
                val = m.group(2).strip()
                stat_cards[label] = val

            # Formulate the response markdown
            res = [
                f"### 📊 台股量化交易大盤環境與績效分析 ({report_date})",
                f"- **大盤 Regime (趨勢狀態)**: {regime}",
            ]

            if stat_cards:
                res.append("\n**📈 策略績效總覽:**")
                for label, val in stat_cards.items():
                    res.append(f"- {label}: {val}")
            
            # 4. Extract rolling benchmark returns if present
            # Looking for 0050近5日/20日/60日
            benchmark_stats = []
            for m in re.finditer(r'<div class="label">(0050 近 \d+ 日)</div>\s*<div class="value"[^>]*>([^<]+)</div>', html):
                benchmark_stats.append(f"- {m.group(1)}: {m.group(2)}")
            if benchmark_stats:
                res.append("\n**🏛️ 0050 Benchmark 走勢:**")
                res.extend(benchmark_stats)

            return "\n".join(res)

        except Exception as e:
            return f"❌ 解析 stock_report.html 發生錯誤: {e}"

    @classmethod
    def get_schemas(cls) -> list[dict]:
        return [
            {
                "type": "function",
                "function": {
                    "name": "get_market_regime",
                    "description": "解析今日 stock_report.html 以取得大盤 Regime 狀態與最新的量化交易回測數據指標。",
                    "parameters": {"type": "object", "properties": {}},
                },
            }
        ]

class SignalsTool:
    """Tool to read and append entry/exit trading signals in paper_signals.json."""

    def get_paper_signals(self) -> str:
        """讀取最新的 paper_signals.json 交易信號。"""
        workspace = get_workspace_path()
        signals_path = os.path.join(workspace, "paper_signals.json")

        if not os.path.exists(signals_path):
            return "[] (尚未產生任何信號檔案)"

        try:
            with open(signals_path, "r", encoding="utf-8") as f:
                signals = json.load(f)
            return json.dumps(signals, ensure_ascii=False, indent=2)
        except Exception as e:
            return f"❌ 讀取 paper_signals.json 失敗: {e}"

    def add_paper_signal(
        self,
        ticker: str,
        entry_price: float,
        tp_price: float,
        sl_price: float,
        exit_date: str,
        date: str | None = None,
        status: str = "pending",
        inst_flow: float = 0.0,
        news_score: float = 0.0,
    ) -> str:
        """
        手動或透過 Agent 決策新增/修改 paper_signals.json 的交易信號。
        
        Args:
            ticker: 股票代碼 (例如 "3481")
            entry_price: 建議進場價 (買進價)
            tp_price: 停利價 (Take Profit)
            sl_price: 停損價 (Stop Loss)
            exit_date: 最晚出場日 (格式 YYYY-MM-DD)
            date: 信號產生日期 (預設為今天 YYYY-MM-DD)
            status: 狀態 (pending, executed, exited)
            inst_flow: 三大法人籌碼流入指標 (可選)
            news_score: 新聞情緒指標 (可選)
        """
        workspace = get_workspace_path()
        signals_path = os.path.join(workspace, "paper_signals.json")
        sig_date = date or datetime.today().strftime("%Y-%m-%d")

        signals = []
        if os.path.exists(signals_path):
            try:
                with open(signals_path, "r", encoding="utf-8") as f:
                    signals = json.load(f)
            except Exception as e:
                return f"❌ 載入現有信號失敗: {e}"

        # Check if the signal already exists for this ticker on this date
        updated = False
        for s in signals:
            if s.get("date") == sig_date and s.get("ticker") == ticker:
                s["entry_price"] = entry_price
                s["tp_price"] = tp_price
                s["sl_price"] = sl_price
                s["exit_date"] = exit_date
                s["status"] = status
                s["inst_flow"] = inst_flow
                s["news_score"] = news_score
                updated = True
                break

        if not updated:
            new_sig = {
                "date": sig_date,
                "ticker": ticker,
                "entry_price": entry_price,
                "tp_price": tp_price,
                "sl_price": sl_price,
                "exit_date": exit_date,
                "status": status,
                "inst_flow": inst_flow,
                "news_score": news_score,
            }
            signals.append(new_sig)

        try:
            with open(signals_path, "w", encoding="utf-8") as f:
                json.dump(signals, f, ensure_ascii=False, indent=2)
            action = "更新" if updated else "新增"
            return f"✅ 已成功{action}股票 {ticker} 的交易信號 (日期: {sig_date}, 停利: {tp_price}, 停損: {sl_price}, 出場: {exit_date})"
        except Exception as e:
            return f"❌ 寫入 paper_signals.json 失敗: {e}"

    @classmethod
    def get_schemas(cls) -> list[dict]:
        return [
            {
                "type": "function",
                "function": {
                    "name": "get_paper_signals",
                    "description": "讀取目前 paper_signals.json 內所有的交易信號（包含代號、建議進場價、停利、停損與狀態）。",
                    "parameters": {"type": "object", "properties": {}},
                },
            },
            {
                "type": "function",
                "function": {
                    "name": "add_paper_signal",
                    "description": "向 paper_signals.json 新增或更新今日交易信號計劃。",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "ticker": {"type": "string", "description": "股票代碼，例如 '3481'"},
                            "entry_price": {"type": "number", "description": "建議買進價/昨日收盤價"},
                            "tp_price": {"type": "number", "description": "停利價格"},
                            "sl_price": {"type": "number", "description": "停損價格"},
                            "exit_date": {"type": "string", "description": "最晚出場日 (YYYY-MM-DD)"},
                            "date": {"type": "string", "description": "信號日期，預設為今日 (YYYY-MM-DD)", "default": ""},
                            "status": {"type": "string", "description": "信號狀態，預設為 'pending'", "default": "pending"},
                            "inst_flow": {"type": "number", "description": "法人籌碼比重變化", "default": 0.0},
                            "news_score": {"type": "number", "description": "新聞情緒打分", "default": 0.0},
                        },
                        "required": ["ticker", "entry_price", "tp_price", "sl_price", "exit_date"],
                    },
                },
            },
        ]

class NewsSentimentTool:
    """Tool to fetch high-impact news sentiment leaderboard from tw_news_stocker repo."""

    def get_news_sentiment(self, days: int = 5) -> str:
        """抓取台灣股市最新新聞情緒排行（ days 可選：1, 3, 5, 10, 30, 60 ）。"""
        urls = [
            f"https://raw.githubusercontent.com/voidful/tw_news_stocker/main/docs/data/leaderboard_{days}d.csv",
            f"https://voidful.github.io/tw_news_stocker/data/leaderboard_{days}d.csv",
        ]
        text = None
        for url in urls:
            try:
                req = urllib.request.Request(url, headers={"User-Agent": "tw-stock-agent/1.0"})
                with urllib.request.urlopen(req, timeout=10) as resp:
                    text = resp.read().decode("utf-8")
                    break
            except Exception:
                continue

        if not text:
            return f"⚠️ 抓取近 {days} 天的新聞情緒排行榜失敗。可能外部網路異常或檔案不存在。"

        try:
            reader = csv.DictReader(io.StringIO(text.lstrip("\ufeff")))
            results = []
            for row in reader:
                try:
                    ticker = row.get("code", row.get("ticker", "")).strip()
                    name = row.get("name", "").strip()
                    score = float(row.get("score", row.get("sentiment_score", 0)))
                    results.append({"ticker": ticker, "name": name, "score": score})
                except (ValueError, KeyError):
                    continue

            # Limit to top 20 items to avoid token bloat
            top_results = results[:20]
            if not top_results:
                return "⚪ 目前沒有顯著的新聞情緒資料。"

            headers = ["Ticker", "Name", "Sentiment Score", "Label"]
            table_rows = []
            for item in top_results:
                score = item["score"]
                if score > 3.0:
                    label = "🟢 強正面"
                elif score > 1.0:
                    label = "🟡 正面"
                elif score < -3.0:
                    label = "🔴 強負面"
                elif score < -1.0:
                    label = "🟠 負面"
                else:
                    label = "⚪ 中性"
                table_rows.append([item["ticker"], item["name"], f"{score:.2f}", label])

            # Simple markdown table construction
            col_widths = [max(len(str(x)) for x in col) for col in zip(*([headers] + table_rows))]
            
            def make_row(row_data):
                return "| " + " | ".join(f"{str(val):<{col_widths[i]}}" for i, val in enumerate(row_data)) + " |"

            table_lines = [
                make_row(headers),
                "| " + " | ".join("-" * w for w in col_widths) + " |",
            ]
            for row in table_rows:
                table_lines.append(make_row(row))

            return f"### 📰 新聞情緒排行榜 (近 {days} 天)\n" + "\n".join(table_lines)
        except Exception as e:
            return f"❌ 處理新聞情緒 CSV 發生錯誤: {e}"

    @classmethod
    def get_schemas(cls) -> list[dict]:
        return [
            {
                "type": "function",
                "function": {
                    "name": "get_news_sentiment",
                    "description": "抓取並列出近期的台灣股市新聞情緒排行榜，包括代號、公司名稱及量化的情緒分數與標籤。",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "days": {"type": "integer", "description": "時間視窗天數 (1, 3, 5, 10, 30, 60)", "default": 5}
                        },
                    },
                },
            }
        ]

class YFinanceTool:
    """Tool to fetch historical candlestick price data for verification or trend analysis."""

    def get_stock_history(self, ticker: str, period: str = "1mo") -> str:
        """查詢個股近期價格走勢數據。"""
        ticker = ticker.strip()
        if not ticker:
            return "❌ 股票代碼不能為空。"

        # Taiwan stock suffix resolution
        symbol = f"{ticker}.TW" if ticker.isdigit() else ticker
        
        try:
            stock = yf.Ticker(symbol)
            df = stock.history(period=period)
            
            # If no data, try OTC market (.TWO) if it was digit
            if df.empty and ticker.isdigit():
                symbol = f"{ticker}.TWO"
                stock = yf.Ticker(symbol)
                df = stock.history(period=period)

            if df.empty:
                return f"❌ 找不到股票 {ticker} (嘗試了 .TW 和 .TWO) 的歷史價格資料。"

            # Clean DataFrame for representation
            df.index = df.index.date
            df = df[["Open", "High", "Low", "Close", "Volume"]]
            
            # Format numbers
            df["Open"] = df["Open"].round(2)
            df["High"] = df["High"].round(2)
            df["Low"] = df["Low"].round(2)
            df["Close"] = df["Close"].round(2)
            df["Volume"] = df["Volume"].astype(int)

            return f"### 📈 {symbol} 歷史股價紀錄 ({period})\n" + df.tail(15).to_markdown()
        except Exception as e:
            return f"❌ 獲取 {ticker} 歷史股價失敗: {e}"

    @classmethod
    def get_schemas(cls) -> list[dict]:
        return [
            {
                "type": "function",
                "function": {
                    "name": "get_stock_history",
                    "description": "使用 yfinance API 取得個股的近期歷史日Ｋ線量價資料，協助判斷趨勢或支撐壓力。",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "ticker": {"type": "string", "description": "股票代碼 (例如: 2330)"},
                            "period": {
                                "type": "string",
                                "description": "查詢週期，如 '5d', '1mo', '3mo', '1y'",
                                "default": "1mo",
                            },
                        },
                        "required": ["ticker"],
                    },
                },
            }
        ]
