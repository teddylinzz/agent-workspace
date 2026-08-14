import urllib.request
import json

def main():
    date_str = "20260608"
    url = f"https://www.twse.com.tw/rwd/zh/fund/T86?response=json&date={date_str}&selectType=ALLBUT0999"
    print(f"Requesting URL: {url}")
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
        )
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            data = json.loads(html)
            
            if 'data' not in data:
                print("No data found in T86 response. Message:", data.get('stat'))
                return
                
            fields = data.get('fields', [])
            stock_idx = -1
            name_idx = -1
            
            for idx, field in enumerate(fields):
                if '證券代號' in field:
                    stock_idx = idx
                elif '證券名稱' in field:
                    name_idx = idx
                    
            print(f"Fields: {fields}")
            
            # Find 2481
            target_stock = "2481"
            found = False
            for row in data['data']:
                # Strip spaces or quote marks
                stock_code = row[stock_idx].strip()
                if stock_code == target_stock:
                    found = True
                    print(f"\nFound target stock {target_stock} ({row[name_idx].strip()}):")
                    for f, val in zip(fields, row):
                        print(f"  {f}: {val}")
                    break
                    
            if not found:
                print(f"Stock {target_stock} not found in T86 report.")
                
    except Exception as e:
        print(f"Error fetching T86: {e}")

if __name__ == "__main__":
    main()
