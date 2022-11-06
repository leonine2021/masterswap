import requests
import json

def construct_request(buy: str, sell: str, sell_amount: float):

	base = "https://api.0x.org/swap/v1/quote?"

	buytoken = f"buyToken={buy}"
	selltoken = f"sellToken={sell}"
	sell_amount = f"sellAmount={sell_amount}"
	affiliateAddress = f"affiliateAddress="


	request_url = base + buytoken + "&" + selltoken + "&" + sell_amount + "&" + affiliateAddress

	return request_url 


#https://api.0x.org/swap/v1/quote?buyToken=ETH&sellToken=WETH&buyAmount=10000000

def WrapEth(buy_amount: float):

	request = construct_request("ETH", "WETH", buy_amount)

	result = requests.modelsget(request)
	data = result.json()

	return data

def UnwrapEth(sell_amount: float):

	request = construct_request("WETH", "ETH", buy_amount)

	result = requests.get(request)
	data = result.json()

	return data


request = construct_request("DAI", "WETH", 10000000000000000)
print(request)

result = requests.get(request)

data = result.json()

print(data)


