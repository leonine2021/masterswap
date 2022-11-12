import React, { useState } from "react";
const { createHash } = require('crypto');
import Grid from '@mui/material/Grid';
import { ethers } from "ethers";

import Dialog from '@mui/material/Dialog';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { styled } from '@mui/material/styles';
import Select, { selectClasses } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import AddCardIcon from '@mui/icons-material/AddCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { orange } from '@mui/material/colors';

// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}


const CustomizedTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        fontSize: 11,
        maxWidth: '200px'
    },
}));

const CustomizedInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 8,
        backgroundColor: theme.palette.background.paper,
        border: '1.5px solid #FB8C00',
        padding: '6px',
    },
}));


function Info() {
    const [account, setAccount] = useState('')
    const [msg, setMsg] = useState('No Account Connected')
    const [open, setOpen] = useState(false);
    const [currency, setCurrency] = useState('');
    const [signed, setSigned] = useState(false)
    const [rejected, setRejected] = useState(false)
    const [complete, setComplete] = useState(false)

    async function connectWallet() {
        // Check if MetaMask is installed, if it is, try connecting to an account
        if (typeof window.ethereum !== "undefined") {
            try {
                console.log("connecting");
                // Requests that the user provides an Ethereum address to be identified by. The request causes a MetaMask popup to appear. Read more: https://docs.metamask.io/guide/rpc-api.html#eth-requestaccounts
                const accounts = await ethereum.request({ method: "eth_requestAccounts" });
                setAccount(accounts[0])
                setMsg(accounts[0].slice(0, 4) + ' **** **** ' + accounts[0].slice(accounts[0].length - 4, accounts[0].length))
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
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await ethereum.request({ method: "eth_requestAccounts" });
        const signer = provider.getSigner();

        const wethABI = [{
            "constant": true,
            "inputs": [],
            "name": "name",
            "outputs": [{ "name": "", "type": "string" }],
            "payable": false, "stateMutability": "view", "type": "function"
        },
        {
            "constant": false,
            "inputs": [{ "name": "guy", "type": "address" }, { "name": "wad", "type": "uint256" }],
            "name": "approve",
            "outputs": [{ "name": "", "type": "bool" }],
            "payable": false,
            "stateMutability": "nonpayable", "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "totalSupply",
            "outputs": [{ "name": "", "type": "uint256" }],
            "payable": false, "stateMutability": "view", "type": "function"
        },
        {
            "constant": false,
            "inputs": [{ "name": "src", "type": "address" }, { "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }],
            "name": "transferFrom",
            "outputs": [{ "name": "", "type": "bool" }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [{ "name": "wad", "type": "uint256" }],
            "name": "withdraw",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "decimals",
            "outputs": [{ "name": "", "type": "uint8" }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{ "name": "", "type": "address" }],
            "name": "balanceOf",
            "outputs": [{ "name": "", "type": "uint256" }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "symbol",
            "outputs": [{ "name": "", "type": "string" }],
            "payable": false,
            "stateMutability": "view", "type": "function"
        },
        {
            "constant": false,
            "inputs": [{ "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }],
            "name": "transfer",
            "outputs": [{ "name": "", "type": "bool" }],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "deposit",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }],
            "name": "allowance",
            "outputs": [{ "name": "", "type": "uint256" }],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "payable": true,
            "stateMutability": "payable",
            "type": "fallback"
        },
        {
            "anonymous": false,
            "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "guy", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }],
            "name": "Approval", "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }],
            "name": "Transfer", "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{ "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }],
            "name": "Deposit",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }],
            "name": "Withdrawal",
            "type": "event"
        }];
        const wethaddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        // The Contract object
        const wethA = new ethers.Contract(wethaddress, wethABI, provider);
        const amount = ethers.utils.parseEther('5')
        await wethA.connect(signer).approve(account, amount).then((result) => {
            setSigned(true)
        }).catch((error) => {
            console.log(error)
            setRejected(true)
        })
    }

    const handleSignApproval = async () => {
        await approveTransfers()
    }
    // Example POST method implementation:
    // async function createNewUser(url = '/', data = { user: userObject }) {
    //     // Default options are marked with *
    //     const response = await fetch(url, {
    //         method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //         mode: 'cors', // no-cors, *cors, same-origin
    //         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //         credentials: 'same-origin', // include, *same-origin, omit
    //         headers: {
    //             'Content-Type': 'application/json'
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         redirect: 'follow', // manual, *follow, error
    //         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //         body: JSON.stringify(data) // body data type must match "Content-Type" header
    //     });
    //     return response.json(); // parses JSON response into native JavaScript objects
    // }

    const disConnectWallet = () => {
        setAccount('')
        // setMsg('No Account Connected')
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelectCurrency = (event) => {
        setCurrency(event.target.value);
    };

    const handleConfirm = () => {
        setComplete(true)
    }


    return (
        !complete && <Dialog
            className="ml-auto mr-auto"
            open={true}
            sx={{ borderRadius: "30px" }}
        >
            <img className='p-4 ml-auto mr-auto pt-6' src='/mastercard.svg' width="100px" />
            <div className="border-b-2 mx-3">
                <h1 className='text-2xl text-center'>User Information</h1>
            </div>
            <Grid container spacing={1} sx={{ width: "400px" }}>
                <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <br></br>
                    <div className="pl-6">
                        <h2><strong>Name:</strong></h2>
                    </div>
                    <div className="pl-6 mt-2">
                        <h2><strong>Bank Name:</strong></h2>
                    </div>
                    <div className="pl-6 mt-2">
                        <h2><strong>Card Number:</strong></h2>
                    </div>
                    <div className="pl-6 mt-2">
                        <h2><strong>Exp Date:</strong></h2>
                    </div>
                </Grid>
                <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <br></br>
                    <div className="pl-6">
                        <h2>Alice Strange</h2>
                    </div>
                    <div className="pl-6 mt-2">
                        <h2>Bank of America</h2>
                    </div>
                    <div className="pl-6 mt-2">
                        <h2>**** **** **** 4444</h2>
                    </div>
                    <div className="pl-6 mt-2">
                        <h2>05/25</h2>
                    </div>
                </Grid>

                {account && <>
                    <Grid item xs={12} className='text-center mt-6 mb-3'>
                        <AddCardIcon sx={{ fontSize: "50pt", color: orange[800] }} />
                        <h1 className='text-center ml-auto mr-auto'><em>Wallet Connected</em></h1>
                    </Grid>
                    <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div className="pl-6">
                            <h2><strong>Address:</strong></h2>
                        </div>
                    </Grid>
                    <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div className="pl-6">
                            <p>{msg}</p>
                            <button className='w-[100px] h-[35px] px-1 border-[1.5px] border-orange-400 hover:bg-orange-600 rounded-lg text-[10pt]' onClick={disConnectWallet}>Disconnect</button>
                        </div>
                    </Grid>
                    <Grid item xs={12} className='text-center mt-9 mb-3 border-b-2 ml-4 mr-3'>
                        <h1 className='text-2xl ml-auto mr-auto'>Approval Asset & Amount</h1>
                    </Grid>
                    <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div className="pl-6 flex justify-start">
                            <h2><strong>Asset:</strong></h2>
                            <CustomizedTooltip title="Asset you approve for Masterswap to use on your behalf" placement="right" arrow>
                                <HelpOutlineIcon sx={{ fontSize: "small" }} />
                            </CustomizedTooltip>
                        </div>
                    </Grid>
                    <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", mt: 1 }}>
                        <div className="pl-6">
                            <Select
                                value={currency}
                                onChange={handleSelectCurrency}
                                displayEmpty
                                input={<CustomizedInput sx={{ width: "100px", height: "25px" }} />}
                            >
                                <MenuItem value="">
                                    <em className='text-slate-400'>None</em>
                                </MenuItem>
                                <MenuItem value={"usdc"}>USDC</MenuItem>
                                <MenuItem value={"eth"}>ETH</MenuItem>
                                <MenuItem value={"matic"}>MATIC</MenuItem>
                                <MenuItem value={"dai"}>DAI</MenuItem>
                            </Select>
                        </div>
                    </Grid>
                    <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div className="pl-6 flex justify-start">
                            <h2><strong>Amount:</strong></h2>
                            <CustomizedTooltip title="Max Amount in percentage you allow Masterswap to use on your behalf" placement="right" arrow>
                                <HelpOutlineIcon sx={{ fontSize: "small" }} />
                            </CustomizedTooltip>
                        </div>
                    </Grid>
                    <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", mt: 1 }}>
                        <div className="pl-6">
                            <h2><CustomizedInput sx={{ width: "100px", height: "20px" }} /> %</h2>
                        </div>
                    </Grid>
                </>}

                <div className="flex justify-center pb-6 ml-auto mr-auto mt-4">
                    {!account ?
                        (<button className='px-8 py-3 bg-orange-600 mt-4 hover:bg-orange-400 rounded-lg' onClick={connectWallet}>Connect to Wallet</button>)
                        :
                        (!signed ?
                            (<Grid item xs={12} className='text-center mt-6 mb-3'>
                                {rejected && <h1 className='text-center ml-auto mr-auto text-red-500'><em>User Rejected!</em></h1>}
                                <button className='px-8 py-3 bg-orange-600 mt-3 hover:bg-orange-400 rounded-lg' onClick={handleSignApproval}>
                                    Sign Approval
                                </button>
                            </Grid>)
                            :
                            (<Grid item xs={12} className='text-center mt-6 mb-3'>
                                <CheckCircleIcon sx={{ fontSize: "50pt", color: orange[800], "&:hover": { color: "green", cursor: "pointer" } }} onClick={handleConfirm} />
                                <h1 className='text-center ml-auto mr-auto'><em>Approved!</em></h1>
                            </Grid>)
                        )
                    }
                </div>
            </Grid>
        </Dialog >
    );
}

export default Info;
