const { ethers } = require("hardhat");
const hre = require("hardhat");
const { default: build } = require("next/dist/build");
require('dotenv').config();

class BackEnd {

    merchant = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
    contractAddress = '0x5322471a7E37Ac2B8902cFcba84d266b37D811A0';
   

    constructor(_usdValue, _tokenUsed, _walletAddress){
        this.usdValue = _usdValue;
        this.tokenUsed = _tokenUsed;
        this.walletAddress = _walletAddress;
    }

    createContractInstance = async() => {
        let masterSwap = await hre.ethers.getContractAt('MasterSwap', '0x5322471a7E37Ac2B8902cFcba84d266b37D811A0');
    }

    getAccount = async() => {
        let signers = await hre.ethers.getSigners();
        let currentPayer = signers[0];
        this.currentMerchant = signers[1];
        return currentPayer;
    }

    wrapEth = async() => {
        let signers = await hre.ethers.getSigners();
        let currentPayer = signers[0];
        this.currentMerchant = signers[1];
        //Take contract from WETH and take deposit
        const weth = await hre.ethers.getContractAt("IERC20", '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
        await currentPayer.sendTransaction({
            to: weth.address,
            value: hre.ethers.utils.parseEther('100.0')
        })

        console.log("WETH balance of Account: ", await weth.balanceOf(currentPayer.address));
               
    }

    beginTransfer = async() => {
        let signers = await hre.ethers.getSigners();
        let currentPayer = signers[0];
        let currentMerchant = signers[1];

        const masterSwap = await hre.ethers.getContractAt('MasterSwap', '0x2d13826359803522cCe7a4Cfa2c1b582303DD0B4');
        const weth = await hre.ethers.getContractAt("IERC20", '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
        const usdc = await hre.ethers.getContractAt("IERC20", '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48');
        const inputAmount = 2.5;
        const decimals0 = 18;
        // .001 => 1 000 000 000 000 000
        const amountInMax = hre.ethers.utils.parseUnits(
            inputAmount.toString(),
            decimals0
        )
        const out = 1500.0;
        const decimals1 = 6;
        const amountOut = hre.ethers.utils.parseUnits(
            out.toString(),
            decimals1
        )
        let value = amountInMax;
        //Approve Transfer
        let success = await weth.connect(currentPayer).approve(masterSwap.address, value);
        console.log(currentMerchant.address);
        console.log(weth.address);
        let txn = await masterSwap.connect(currentPayer).swapExactOutputSingle(amountOut, amountInMax, weth.address, currentMerchant.address);

        console.log("WETH balance of Account: ", await weth.balanceOf(currentPayer.address));
        console.log("WETH balance of Account: ", await usdc.balanceOf(currentMerchant.address));
    }
}

value = new BackEnd("1500", "", "");
value.beginTransfer();
//value.wrapEth();