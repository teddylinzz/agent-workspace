import sys
import os
import json
from agent.llm import LLMClient

# Ensure imports work
sys.path.append('/Users/ted/agents/agents/tw-stock-agent')

# Candidate data we got from previous steps
candidates_data = [
  {
    "ticker": "6116",
    "name": "彩晶",
    "date": "2026-06-04",
    "close": 20.45,
    "pct_change": -9.91,
    "volume": 43468626,
    "volume_prev": 107759671,
    "volume_ratio_5ma": 0.31,
    "ma5": 19.94,
    "ma20": 13.54,
    "ma60": 10.24,
    "trend": "多頭",
    "above_ma5": True,
    "above_ma20": True,
    "candlestick": "跌停長黑 K",
    "inst_change_20d": 1.3,
    "inst_ratio": 7.72,
    "inst_label": "🟡 小買",
    "news_score": 0.0,
    "news_label": "⚪ 中性",
    "suggested_entry": 20.5,
    "suggested_tp": 25.4,
    "suggested_sl": 16.8,
    "exit_date": "2026-07-03"
  },
  {
    "ticker": "2327",
    "name": "國巨",
    "date": "2026-06-04",
    "close": 743.0,
    "pct_change": -9.39,
    "volume": 23920412,
    "volume_prev": 15243405,
    "volume_ratio_5ma": 1.0,
    "ma5": 787.4,
    "ma20": 599.42,
    "ma60": 392.87,
    "trend": "震盪",
    "above_ma5": False,
    "above_ma20": True,
    "candlestick": "長黑 K",
    "inst_change_20d": 1.33,
    "inst_ratio": 57.49,
    "inst_label": "🟡 小買",
    "news_score": 1.0,
    "news_label": "⚪ 中性",
    "suggested_entry": 743.0,
    "suggested_tp": 947.6,
    "suggested_sl": 589.5,
    "exit_date": "2026-07-03"
  },
  {
    "ticker": "3481",
    "name": "群創",
    "date": "2026-06-04",
    "close": 55.8,
    "pct_change": -6.06,
    "volume": 169309153,
    "volume_prev": 932910345,
    "volume_ratio_5ma": 0.23,
    "ma5": 55.7,
    "ma20": 43.72,
    "ma60": 32.06,
    "trend": "多頭",
    "above_ma5": True,
    "above_ma20": True,
    "candlestick": "長黑 K",
    "inst_change_20d": 0.0,
    "inst_ratio": 0.0,
    "inst_label": "⚪ 無資料",
    "news_score": 0.0,
    "news_label": "⚪ 中性",
    "suggested_entry": 55.8,
    "suggested_tp": 72.5,
    "suggested_sl": 43.3,
    "exit_date": "2026-07-03"
  },
  {
    "ticker": "3149",
    "name": "正達",
    "date": "2026-06-04",
    "close": 91.0,
    "pct_change": 0.22,
    "volume": 42651320,
    "volume_prev": 50144467,
    "volume_ratio_5ma": 1.28,
    "ma5": 83.48,
    "ma20": 64.43,
    "ma60": 51.54,
    "trend": "多頭",
    "above_ma5": True,
    "above_ma20": True,
    "candlestick": "避雷針 (上影線長，上方賣壓重)",
    "inst_change_20d": 5.35,
    "inst_ratio": 8.58,
    "inst_label": "🟢 大買",
    "news_score": 0.0,
    "news_label": "⚪ 中性",
    "suggested_entry": 91.0,
    "suggested_tp": 110.7,
    "suggested_sl": 76.2,
    "exit_date": "2026-07-03"
  },
  {
    "ticker": "2344",
    "name": "華邦電",
    "date": "2026-06-04",
    "close": 179.5,
    "pct_change": 1.13,
    "volume": 226727534,
    "volume_prev": 326857110,
    "volume_ratio_5ma": 0.83,
    "ma5": 173.5,
    "ma20": 138.5,
    "ma60": 111.99,
    "trend": "多頭",
    "above_ma5": True,
    "above_ma20": True,
    "candlestick": "避雷針 (上影線長，上方賣壓重)",
    "inst_change_20d": 9.14,
    "inst_ratio": 34.05,
    "inst_label": "🟢 大買",
    "news_score": 0.0,
    "news_label": "⚪ 中性",
    "suggested_entry": 179.5,
    "suggested_tp": 228.0,
    "suggested_sl": 143.1,
    "exit_date": "2026-07-03"
  },
  {
    "ticker": "2356",
    "name": "英業達",
    "date": "2026-06-04",
    "close": 77.8,
    "pct_change": -8.9,
    "volume": 137813732,
    "volume_prev": 196383672,
    "volume_ratio_5ma": 0.63,
    "ma5": 78.24,
    "ma20": 61.02,
    "ma60": 49.9,
    "trend": "震盪",
    "above_ma5": False,
    "above_ma20": True,
    "candlestick": "長黑 K",
    "inst_change_20d": 3.41,
    "inst_ratio": 19.29,
    "inst_label": "🟢 大買",
    "news_score": 0.0,
    "news_label": "⚪ 中性",
    "suggested_entry": 77.8,
    "suggested_tp": 96.5,
    "suggested_sl": 63.8,
    "exit_date": "2026-07-03"
  },
  {
    "ticker": "6239",
    "name": "力成",
    "date": "2026-06-04",
    "close": 354.0,
    "pct_change": 3.21,
    "volume": 15841616,
    "volume_prev": 14962687,
    "volume_ratio_5ma": 0.95,
    "ma5": 357.8,
    "ma20": 288.75,
    "ma60": 235.07,
    "trend": "震盪",
    "above_ma5": False,
    "above_ma20": True,
    "candlestick": "長紅 K",
    "inst_change_20d": 0.0,
    "inst_ratio": 0.0,
    "inst_label": "⚪ 無資料",
    "news_score": 0.0,
    "news_label": "⚪ 中性",
    "suggested_entry": 354.0,
    "suggested_tp": 439.6,
    "suggested_sl": 289.8,
    "exit_date": "2026-07-03"
  }
]

regime_info = """
- 大盤 Regime: 🟢 (多頭)
- 策略總報酬率: +405.0%
- 年化報酬率: +74.1%
- Sharpe Ratio: 2.29
- 最大回撤: -18.7%
- 勝率: 56.4%
- 0050 近 5 日: +0.7%, 近 20 日: +9.4%, 近 60 日: +41.1%
- 市場波動率 (20D): 30.8%
- 完成交易數: 578
"""

news_details = """
1. 2327 國巨:
   - FactSet調查：2026 EPS預估中位數上修至 17.25 元，目標價調升至 754 元，全體分析師偏多。
   - 營運：AI 相關營收佔比已達 15%，5月接單出貨比(B/B Ratio)衝上 1.3，AI與高端市場營收佔比達 75%。
2. 2344 華邦電:
   - 獲利：4月自結純益暴增216倍，EPS 1.66元；首季EPS 2.25元，毛利率達53.4%新高。
   - 前景：董事長指出AI需求帶動記憶體「全面性、結構性」缺貨。大摩評等調升至「優於大盤」，目標價大升至 222 元。
3. 2356 英業達:
   - 營運：伺服器業務全年營收預估增長3成，佔總營收5成。董事長葉力誠預期今年業績將「季季高」。
   - COMPUTEX 2026展示Vera Rubin架構伺服器，與NVIDIA、Intel深度合作。
4. 3149 正達:
   - 人事：6月初改選，新任董事長許庭禎。
   - 轉型：投入10億建置伺服器HDD玻璃碟盤量產線，預計7月送樣；先進封裝玻璃載板驗證中，預計2027下半年放量；子公司正達戰術科技與美軍工新創合作軍規無人機。
   - 財報：Q1仍處於轉型調整期，稅後淨損8,455萬，EPS -0.37元。
5. 6239 力成:
   - 先進封裝：積極發展FOPLP（扇出型面板級封裝），與AMD完成業界首款2.5D面板級封裝技術，良率95%，下半年認證，2027上半年量產。
   - 財報：Q1 EPS 2.5元，4月營收創四年新高，全年資本支出目標加碼至500億以上。
   - 處置股：5/29至6/11處置中。
6. 3481 群創:
   - 處置股：6/4至6/17處置中。
   - 消息：FOPLP技術Chip-First已量產，智慧座艙轉型，處分南科Fab 5廠房獲200億業外。下週6/11除息每股1元。
7. 6116 彩晶:
   - 處置股：6/4至6/17處置中。
   - 消息：第一季稅後虧損1.83億，每股虧損0.06元。目前並無公開的半導體封裝玻璃基板量產或試產計畫，屬於題材跟漲。6/4遭列處置股首日股價重挫跌停（-9.91%）。
"""

prompt = f"""
你是一位專業的台股量化與動能交易分析師。
請根據以下提供的今日大盤狀態 (Regime)、7檔候選股票的K線量價技術指標、三大法人籌碼流動、近期新聞事實，撰寫一份高水準、專業、排版美觀的台股每日信號分析報告。
你的主要任務是從這7檔候選股票中，挑選出【最適合明天 (2026-06-05) 買進與關注的前五檔股票清單】，並提供深度分析與具體交易計畫。

大盤狀態資料：
{regime_info}

候選股票技術指標與籌碼資料 (2026-06-04 收盤)：
{json.dumps(candidates_data, ensure_ascii=False, indent=2)}

候選股票近期新聞事實：
{news_details}

報告必須包含以下幾個核心部分：
1. **大盤環境與策略分析 (Macro Regime & Portfolio Health)**:
   - 分析今日大盤處於 🟢 多頭 狀態下的曝險建議。
   - 針對今日大盤收盤後部分強勢股出現較大回檔（例如彩晶跌停、國巨重挫-9.39%、英業達重挫-8.9%），分析背後的市場情緒或回撤風險，並說明在此時如何控制倉位規模。
2. **前五檔焦點股票清單 (Top 5 Watchlist & Trading Plan)**:
   - 挑選出前五檔股票 (推薦順序：1. 華邦電 2344, 2. 力成 6239, 3. 正達 3149, 4. 國巨 2327, 5. 英業達 2356)。
   - 提供明細表格，包含：股票代號、名稱、收盤價、日漲跌幅、建議買進價/昨日收盤價、停利價、停損價、最晚出場日期、籌碼評等、新聞情緒。
   - 針對這五檔，分別撰寫【K線型態分析】、【籌碼面解析】、【近期新聞與產業催化劑】、【具體交易策略/執行要點】。
3. **未入選股票風險提示 (Risk Warning on Non-selected Candidates)**:
   - 針對未入選的兩檔股票 (群創 3481, 彩晶 6116) 進行深度風險分析。
   - 解釋為什麼將它們剔除（例如：兩者均於 6/4 進入處置股分盤交易，流動性大幅下降；彩晶首日跌停且基本面仍虧損，且玻璃基板封裝並無實質計畫僅屬題材跟漲；群創雖有實質 FOPLP 量產，但分盤交易期間波動大且下週有除息壓力）。
4. **結論與風險控管建議 (Conclusion & Risk Management)**:
   - 給予明天的交易具體操作心法，強調資金控管與停損執行。

報告請使用繁體中文撰寫，並使用精美的 GitHub Markdown 格式，包含適當的引用 (Blockquotes)、標籤與加粗，使其讀起來極具專業研究報告的質感。
"""

print("Generating report using Gemini...")
client = LLMClient(model="gemini-2.5-flash")
resp = client.chat(user=prompt)
report_content = resp.choices[0].message.content

output_dir = "/Users/ted/agents/agents/tw-stock-agent/skills/fetch-top5-tw-stock-workspace/iteration-1/eval-1-detailed-report/without_skill/outputs/"
os.makedirs(output_dir, exist_ok=True)
output_path = os.path.join(output_dir, "watch_list_analysis.md")

with open(output_path, "w", encoding="utf-8") as f:
    f.write(report_content)

print(f"Report written to {output_path} successfully!")
