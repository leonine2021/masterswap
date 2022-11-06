import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
const { createHash } = require('crypto');

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
                // console.log(accounts[0])
                setAccount(accounts[0])
                setMsg(accounts[0].slice(0, 4) + ' **** **** ' + accounts[0].slice(accounts[0].length - 4, accounts[0].length))

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

    const userObject = hash(process.env.BANK_ACCOUNT + process.env.EXP_DATE + process.env.CVC)
    console.log('hash:', userObject)

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
        <div className='px-10% flex justify-center mt-20'>
            <div className={styles.tabs}>
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
                        <h2><strong>Card Number:</strong></h2>
                        <h2>**** **** **** 4444</h2>
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
            </div>
        </div>
    );
}

export default Info;
