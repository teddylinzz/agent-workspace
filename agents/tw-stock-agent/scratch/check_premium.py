import urllib.request
import json
import re

def get_net_value():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*'
    }
    
    # Capital Fund ETF net value API endpoint
    url = "https://www.capitalfund.com.tw/api/etf/product/net-value"
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            data = json.loads(response.read().decode('utf-8'))
            # Filter for 00937B
            for item in data.get('data', []):
                # Check for product code 00937B
                if item.get('code') == '00937B' or '00937B' in item.get('name', ''):
                    print(json.dumps(item, ensure_ascii=False, indent=2))
                    return
            print("Could not find 00937B in Capital Fund API response.")
    except Exception as e:
        print(f"Capital Fund API failed: {e}")
        
    # Fallback to WantGoo or other source
    print("Trying fallback WantGoo HTML parsing...")
    try:
        url = "https://www.wantgoo.com/stock/00937b/discount-premium"
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            html = response.read().decode('utf-8')
            # Look for discount/premium percentage
            # Typically looks like: <div class="value">...</div>
            # Or in script tags. Let's find patterns like: 
            # 折溢價: -0.12% or similar
            matches = re.findall(r'([-+]?\d+\.\d+%)', html)
            if matches:
                print(f"Possible discount/premium matches in WantGoo HTML: {matches[:10]}")
            else:
                print("No patterns matched in HTML.")
    except Exception as e:
        print(f"WantGoo parsing failed: {e}")

if __name__ == '__main__':
    get_net_value()
