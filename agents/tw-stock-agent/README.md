# TW Stock Momentum AI Trading Agent (tw-stock-agent)

這是一個專門審查與優化『台股動能交易信號』的自主 AI Agent 專案，結合 Google Gemini LLM、三大法人籌碼比重以及即時新聞情緒指標，提供多維度的交易決策分析。

## 🤖 系統架構與特色

本專案採用 **Agent-Native** 與 **ReAct** (Reasoning + Acting) 雙迴圈架構：
1. **大盤 Regime 診斷**: 自動解析 `stock_report.html` 中的大盤環境，在空頭或高風險狀態下主動降低曝險上限或暫停買進信號。
2. **新聞情緒比對**: 抓取 `tw_news_stocker` 的熱門個股新聞情緒排行榜，對有負面輿情的個股標註警告或主動剔除。
3. **自主信號回寫**: 當 AI 確定審查決策後，能調用工具將更新後的情緒、法人籌碼比重及最後狀態，自動寫回 `paper_signals.json` 交易信號檔。
4. **股價歷史審查**: 提供 `yfinance` 整合，讓 AI 特工可以主動查核個股近期日Ｋ量價趨勢。

專案目錄結構：
```text
tw-stock-agent/
├── pyproject.toml         # 專案套件依賴配置
├── env.example            # 環境變數範例
├── main.py                # 互動式 CLI 進入點
└── agent/
    ├── __init__.py
    ├── base_agent.py      # ReAct 迴圈核心引擎
    ├── llm.py             # Gemini / OpenAI 相容 API 包裝器
    ├── scratchpad.py      # 特工對話記憶體
    ├── tools.py           # 報表解析、信號增刪、情緒抓取、yfinance 整合工具組
    └── tw_stock_agent.py  # AI 特工協調器與 Mock 模擬器
```

## ⚙️ 環境設定

1. **建立並啟用虛擬環境**：
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   pip install --upgrade pip
   pip install -e .
   ```
   或是直接使用 `pip install -r requirements.txt` (如果有的話)，或是透過 `pip install rich prompt-toolkit python-dotenv openai pandas numpy yfinance tabulate` 安裝。

2. **設定環境變數**：
   複製專案目錄下的 `env.example` 並命名為 `.env`：
   ```bash
   cp env.example .env
   ```
   編輯 `.env` 並填入：
   - `GEMINI_API_KEY`: 您的 Google Gemini API Key。
   - `TW_STOCKER_PATH`: 您的 `tw_stocker` 專案絕對路徑 (預設為 `/Users/ted/workspace/tw_stocker`)。

## 🚀 執行與使用方式

啟動互動式 CLI：
```bash
python main.py
```

在 CLI 中，您可以輸入任意投資問題或使用以下**斜線指令**：

* **`/run`**: 啟動 AI 主導的交易信號多維審查，並將審查結果寫入 `paper_signals.json`。
* **`/regime`**: 快速查詢今日大盤 Regime 與量化交易回測概況。
* **`/sentiment [天數]`**: 查詢最近 `N` 天 (預設 5 天) 的台股高影響力新聞情緒排行榜。
* **`/signals`**: 查看當前 `paper_signals.json` 的所有信號。
* **`/history <股票代碼> [查詢週期]`**: 查詢指定個股的歷史日Ｋ線 (例如 `/history 2330 1mo`)。
* **`/help`**: 顯示指令手冊。
* **`/quit`**: 結束程式。
