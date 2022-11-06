from web3 import Web3

#from web3.auto.infura import w3

w3 = Web3(Web3.HTTPProvider('https://mainnet.infura.io/v3/44c5b413b0c84169bdddcd3aed6dddff'))

a = w3.eth.get_block('latest')

def create_contract_factory(contract_address, abi_json):

    contract_instance = w3.eth.contract(contract_address, abi=abi_json)
    return contract_instance

def set_approval(contract_instance, from_address, to_address, amount):

    contract = contract_instance
    tx_hash = contract.functions.approve(to_address, amount).transact({'from': from_address})
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    #contract.functions.allowance(alice, bob).call()

def external_transfer(from_address, to_address, amount):

    #Transact({from}) --> refers to person submitting transaction
    tx_hash = contract.functions.transferFrom(from_address, to_address, amount).transact({'from': to_address})
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)