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
                }, 3000)
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
        <div className='px-10% flex justify-center mt-3'>
            <div className={styles.tabs}>
                <div>
                    <div >
                        <h1 className='text-2xl text-center'>User Info</h1>
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
                    <div>
                        <h1 className='text-2xl text-center'>Wallet Info</h1>
                    </div>
                    <br></br>
                    <div className="pl-6">
                        <h2><strong>Account:</strong></h2>
                        <p>{msg}</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    {!account ?
                        (<button className='px-8 py-3 bg-orange-600 mt-4 hover:bg-orange-400 rounded-lg' onClick={connectWallet}>Connect to Wallet</button>)
                        :
                        (<button className='px-8 py-3 bg-orange-600 mt-4 hover:bg-orange-400 rounded-lg' onClick={disConnectWallet}>{!finish ? 'processing' : 'Disconnect'}</button>)}
                </div>
            </div>
        </div>
    );
}

export default Info;
