import boto3
s3 = boto3.client("s3")
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
            data = s3.list_objects(
                Bucket="cloud9-ktest",
                MaxKeys=10
            )
        except BaseException as e:
            print(e)
            raise(e)
        
    
    return "Successfully executed"
