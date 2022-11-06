const hre = require("hardhat");

async function main() {
    const SwapExample = await hre.ethers.getContractFactory("ZXSWap");
    const swapexample = await SwapExample.deploy();
    console.log(`Deployed to address ${swapexample.address}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})
