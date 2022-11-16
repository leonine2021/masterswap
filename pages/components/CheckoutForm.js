import React, { useState, useEffect } from "react";
import {
    PaymentElement,
    useStripe,
    useElements
} from "@stripe/react-stripe-js";

import { useRouter } from 'next/router'
import DropDownButton from "./DropdownButtom";
const Web3 = require('web3');
// import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";
import qs from 'qs';
import { BigNumber } from '@0x/utils';

// const buyToken = 'ETH';
// const sellToken = 'USDC';
// const sellAmount = '100000000000000000000';
// const affiliateAddress = '0x1f472D2550744f20C13Ac525fa365Ad88317078A';

// const constructUrl = (buyToken, sellToken, sellAmount, affiliateAddress) => {
//     let url = 'https://api.0x.org/swap/v1/quote?buyToken=' + buyToken + '&sellToken=' + sellToken + '&sellAmount=' + sellAmount + '&affiliateAddress=' + affiliateAddress
//     return url
// }


export default function CheckoutForm() {
    const router = useRouter()
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // const [account, setAccount] = useState(null);

    useEffect(() => {
        if (!stripe) {
            return;
        }
        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );
        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Payment succeeded!");
                    break;
                case "processing":
                    setMessage("Your payment is processing.");
                    break;
                case "requires_payment_method":
                    setMessage("Your payment was not successful, please try again.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
        async function connectWallet() {
            if (typeof window.ethereum !== "undefined") {
                try {
                    console.log("connecting");
                    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
                    setAccount(accounts[0])
                } catch (error) {
                    console.log(error);
                }
            }
            else {
                alert("Please install MetaMask")
            }
        }
        // connectWallet();
    }, [stripe]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;
        setIsLoading(true);

        setTimeout(() => {
            router.push('/success')
            setIsLoading(false)
        }, 3000)

        // await trySwap()
    };

    // const trySwap = async () => {

    //     // if (!account) await connectWallet();

    //     // let takerAddress = account
    //     console.log("takerAddress", '0x1f472D2550744f20C13Ac525fa365Ad88317078A')
    //     const swapQuoteJson = await getQuote('0x1f472D2550744f20C13Ac525fa365Ad88317078A')
    //     const fromTokenAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' //weth
    //     const erc20abi = [
    //         {
    //             "constant": true,
    //             "inputs": [],
    //             "name": "name",
    //             "outputs": [
    //                 {
    //                     "name": "",
    //                     "type": "string"
    //                 }
    //             ],
    //             "payable": false,
    //             "stateMutability": "view",
    //             "type": "function"
    //         },
    //         {
    //             "constant": false,
    //             "inputs": [
    //                 {
    //                     "name": "_spender",
    //                     "type": "address"
    //                 },
    //                 {
    //                     "name": "_value",
    //                     "type": "uint256"
    //                 }
    //             ],
    //             "name": "approve",
    //             "outputs": [
    //                 {
    //                     "name": "",
    //                     "type": "bool"
    //                 }
    //             ],
    //             "payable": false,
    //             "stateMutability": "nonpayable",
    //             "type": "function"
    //         },
    //         {
    //             "constant": true,
    //             "inputs": [],
    //             "name": "totalSupply",
    //             "outputs": [
    //                 {
    //                     "name": "",
    //                     "type": "uint256"
    //                 }
    //             ],
    //             "payable": false,
    //             "stateMutability": "view",
    //             "type": "function"
    //         },
    //         {
    //             "constant": false,
    //             "inputs": [
    //                 {
    //                     "name": "_from",
    //                     "type": "address"
    //                 },
    //                 {
    //                     "name": "_to",
    //                     "type": "address"
    //                 },
    //                 {
    //                     "name": "_value",
    //                     "type": "uint256"
    //                 }
    //             ],
    //             "name": "transferFrom",
    //             "outputs": [
    //                 {
    //                     "name": "",
    //                     "type": "bool"
    //                 }
    //             ],
    //             "payable": false,
    //             "stateMutability": "nonpayable",
    //             "type": "function"
    //         },
    //         {
    //             "constant": true,
    //             "inputs": [],
    //             "name": "decimals",
    //             "outputs": [
    //                 {
    //                     "name": "",
    //                     "type": "uint8"
    //                 }
    //             ],
    //             "payable": false,
    //             "stateMutability": "view",
    //             "type": "function"
    //         },
    //         {
    //             "constant": true,
    //             "inputs": [
    //                 {
    //                     "name": "_owner",
    //                     "type": "address"
    //                 }
    //             ],
    //             "name": "balanceOf",
    //             "outputs": [
    //                 {
    //                     "name": "balance",
    //                     "type": "uint256"
    //                 }
    //             ],
    //             "payable": false,
    //             "stateMutability": "view",
    //             "type": "function"
    //         },
    //         {
    //             "constant": true,
    //             "inputs": [],
    //             "name": "symbol",
    //             "outputs": [
    //                 {
    //                     "name": "",
    //                     "type": "string"
    //                 }
    //             ],
    //             "payable": false,
    //             "stateMutability": "view",
    //             "type": "function"
    //         },
    //         {
    //             "constant": false,
    //             "inputs": [
    //                 {
    //                     "name": "_to",
    //                     "type": "address"
    //                 },
    //                 {
    //                     "name": "_value",
    //                     "type": "uint256"
    //                 }
    //             ],
    //             "name": "transfer",
    //             "outputs": [
    //                 {
    //                     "name": "",
    //                     "type": "bool"
    //                 }
    //             ],
    //             "payable": false,
    //             "stateMutability": "nonpayable",
    //             "type": "function"
    //         },
    //         {
    //             "constant": true,
    //             "inputs": [
    //                 {
    //                     "name": "_owner",
    //                     "type": "address"
    //                 },
    //                 {
    //                     "name": "_spender",
    //                     "type": "address"
    //                 }
    //             ],
    //             "name": "allowance",
    //             "outputs": [
    //                 {
    //                     "name": "",
    //                     "type": "uint256"
    //                 }
    //             ],
    //             "payable": false,
    //             "stateMutability": "view",
    //             "type": "function"
    //         },
    //         {
    //             "payable": true,
    //             "stateMutability": "payable",
    //             "type": "fallback"
    //         },
    //         {
    //             "anonymous": false,
    //             "inputs": [
    //                 {
    //                     "indexed": true,
    //                     "name": "owner",
    //                     "type": "address"
    //                 },
    //                 {
    //                     "indexed": true,
    //                     "name": "spender",
    //                     "type": "address"
    //                 },
    //                 {
    //                     "indexed": false,
    //                     "name": "value",
    //                     "type": "uint256"
    //                 }
    //             ],
    //             "name": "Approval",
    //             "type": "event"
    //         },
    //         {
    //             "anonymous": false,
    //             "inputs": [
    //                 {
    //                     "indexed": true,
    //                     "name": "from",
    //                     "type": "address"
    //                 },
    //                 {
    //                     "indexed": true,
    //                     "name": "to",
    //                     "type": "address"
    //                 },
    //                 {
    //                     "indexed": false,
    //                     "name": "value",
    //                     "type": "uint256"
    //                 }
    //             ],
    //             "name": "Transfer",
    //             "type": "event"
    //         }
    //     ]

    //     // set allowance
    //     const web3 = new Web3(Web3.givenProvider);
    //     const ERC20TokenContract = new web3.eth.Contract(erc20abi, fromTokenAddress);
    //     console.log('setup ERCTokenContract', ERC20TokenContract)

    //     const maxApproval = new BigNumber(2).pow(256).minus(1);
    //     console.log("approval amount: ", maxApproval);

    //     const tx = await ERC20TokenContract.methods.approve(
    //         swapQuoteJson.allowanceTarget,
    //         maxApproval,
    //     )
    //         .send({ from: '0x1f472D2550744f20C13Ac525fa365Ad88317078A' })
    //         .then(tx => {
    //             console.log("tx: ", tx)
    //             setIsLoading(false)
    //             swapQuoteJson.from = '0x1f472D2550744f20C13Ac525fa365Ad88317078A'
    //             console.log(swapQuoteJson)

    //         });


    //     //perform the swap
    //     // const receipt = await web3.eth.sendTransaction(swapQuoteJson);
    //     // console.log("receipt", receipt);

    // }

    // const getQuote = async (account) => {
    //     console.log("getting quote from 0x");

    //     let amount = Number(0.001 * 10 ** 18);
    //     console.log(amount)
    //     const params = {
    //         sellToken: 'WETH',
    //         buyToken: 'USDC',
    //         sellAmount: amount,
    //         // takerAddress: account
    //     }

    //     const response = await fetch(`https://api.0x.org/swap/v1/quote?${qs.stringify(params)}`);

    //     let swapQuoteJSON = await response.json();
    //     console.log("Quote: ", swapQuoteJSON);

    //     return swapQuoteJSON
    // }

    return (
        <div className='flex px-10 pt-10 justify-center  items-center'>
            <form id="payment-form" onSubmit={handleSubmit}>
                <PaymentElement id="payment-element" />
                <DropDownButton />
                <button className='px-8 py-3 bg-orange-600 mt-4 hover:bg-orange-400 rounded-lg w-[300px] h-[50px]' disabled={isLoading || !stripe || !elements} id="submit">
                    <span id="button-text">
                        {isLoading ? (<div className="flex justify-center items-center" role="status">
                            <svg aria-hidden="true" className="mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className='ml-0 pl-o'>submitting...</span>
                        </div>) : "Submit Order"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
        </div>

    );
}