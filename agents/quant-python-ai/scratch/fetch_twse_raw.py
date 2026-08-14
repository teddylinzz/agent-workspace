import urllib.request
import json

def main():
    url = "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20260608&stockNo=2481"
    print(f"Requesting URL: {url}")
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}
        )
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            data = json.loads(html)
            if 'data' in data:
                print(f"Data fields: {data.get('fields')}")
                print("Last 3 rows of data:")
                for row in data['data'][-3:]:
                    print(row)
            else:
                print("No 'data' field in TWSE response. Message:", data.get('stat'))
    except Exception as e:
        print(f"Error fetching from TWSE: {e}")

if __name__ == "__main__":
    main()
