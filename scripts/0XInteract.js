const API_QUOTE_URL = 'https://api.0x.org/swap/v1/quote';
const fetch = require('node-fetch');
const hre = require("hardhat");

class ZeroXInteraction {

    createQueryString(params) {
        return Object.entries(params).map(([k, v]) => `${k}=${v}`).join('&');
    }

    createWhale = async() => {
        //let whale_address = process.env.WHALE_ADDRESS;
        let whale_address = '0x06601571AA9D3E8f5f7CDd5b993192618964bAB5';
        let whale = await hre.ethers.getImpersonatedSigner(whale_address);
        whale = await hre.ethers.getSigner(whale_address);
        return whale;
    }

    checkSell = async() => {
        const weth = await hre.ethers.getContractAt("IERC20", '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
        const usdc = await hre.ethers.getContractAt("IERC20", '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48');
        const usdt = await hre.ethers.getContractAt("IERC20", '0xdAC17F958D2ee523a2206206994597C13D831ec7');
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
        const signers = await hre.ethers.getSigners();
        const seller = await this.createWhale();
        console.log(seller);

        const qs = this.createQueryString({
            sellToken: 'WETH',
            buyToken: 'USDC',
            buyAmount: amountOut,
            // 0x-API cannot perform taker validation in forked mode.
        });

        const quoteUrl = `${API_QUOTE_URL}?${qs}`;
        const response = await fetch(quoteUrl);
        const quote = await response.json();
        console.log(quote);
        console.log(`Received a quote with price ${quote.price}`);
        
        //Need to Allow Sell of The WETH

        await weth.connect(seller).approve(quote.allowanceTarget, quote.sellAmount);
        let txn =  await seller.sendTransaction({
            to: quote.to,
            data: quote.data,
            value: quote.value,
            gas : quote.gas,
            gasPrice: quote.gasPrice
        });


    }

}

zero = new ZeroXInteraction();
zero.checkSell();