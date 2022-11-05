const hre = require("hardhat");
//require('dotenv').config();


class SwapBackend {

    constructor(usdValue){
        this.usdNeeded = usdValue;
    }

    getIERC20Address(token_address) {
        //Need to figure out how to pass as environment variable
        return process.env.ETH_ADDRESS;
    }

    createWhale = async() => {
        //let whale_address = process.env.WHALE_ADDRESS;
        let whale_address = '0x2FAF487A4414Fe77e2327F0bf4AE2a264a776AD2';
        let whale = await hre.ethers.getImpersonatedSigner(whale_address);
        whale = await hre.ethers.getSigner(whale_address);
        return whale;
    }

    getCurrentPrices = async(contractInstance) => {
        let ethValue = await contractInstance.getCurrentPrices();
        console.log(ethValue);
    }

    wrapETH() {
        //
    }
    
    beginSwap = async() => {
        //const tokenAddressSender = this.getIERC20Address();
        let whale = await this.createWhale();
        const contractInstance = await hre.ethers.getContractAt('MasterSwap', '0x3D63c50AD04DD5aE394CAB562b7691DD5de7CF6f');
        contractInstance.swapExactOutputMultihop(1500, 0.8);

        /**
        //Initiate an Impersonated Account to Mimic Send
        let whale = await this.createWhale();
        
        //Swap WETH for USDC (THis is WETH contract)
        let senderTokenInstance = await hre.ethers.getContractAt("IERC20", tokenAddressSender);

        // Define How Much ETH needs to be sent
        this.getCurrentPrices(contractInstace);

        // this needs to be different amountIn first needs to be defined
        let usdcValue = senderTokenInstance.connect(whale).approve(swapExample.address, this.amountIn);
        

        //Send to Reciever
        */
        
        
    }



}


let value = new SwapBackend('50');
value.beginSwap();