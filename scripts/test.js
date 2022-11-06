const abiWETH = require('/Users/noaheggenschwiler/Desktop/masterswap/artifacts/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json');
var web3 = require('web3');
const ether = require("ethers");

async function main() {
        const wethAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
        //const wETHABI = abiWETH.abi;
        const allowerAddress = '0x4CF8CBb9af8D19d4F5494f6E7353c484cB53F455';
        //const ethContract = await new web3.eth.Contract(abiWETH, wethAddress);
        const signers = hre.ethers.getSigners();
        let signer = signers[0];
        console.log(signer);
        console.log(abiWETH);
        let ethContract = await hre.ethers.getContractAt("IERC20", wethAddress);
        console.log(ethContract);
        let data = await ethContract.connect(signer).approve(allowerAddress, 0.0001)
}

main();