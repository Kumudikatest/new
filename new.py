import boto3
translate = boto3.client("translate")
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
        
        try:
            data = translate.translate_text(
                SourceLanguageCode="auto",
                TargetLanguageCode="en",
                Text="Hola"
            )
            print(res)
        except BaseException as e:
            print(e)
            raise(e)
    
    return "Successfully executed"
