import requests

def handler(request):
    try:
        res = requests.delete(
            "https://paper-api.alpaca.markets/v2/positions",
            params={},
            headers={"Accept":"application/json"}
        )
        # your code goes here
        print(res)
    except BaseException as e:
        # error handling goes here
        print(e)
        raise(e)
    
    return "Successfully executed"
