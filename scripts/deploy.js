const hre = require("hardhat");

async function main() {
    const SwapExample = await hre.ethers.getContractFactory("SwapExample");
    const swapexample = await SwapExample.deploy();
    console.log(`Deployed to address ${swapexample.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})
