const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
    const TokenContract = await ethers.getContractFactory("Token");
    const deployTokenContract = await TokenContract.deploy();
    await deployTokenContract.deployed();

    console.log("Token Contract address:", deployTokenContract.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })

    /*
    const [deployer] = await ethers.getSigners();
    console.log(`Deploying contracts with the accounts: ${deployer.address}`);

    const balance = await deployer.getBalance();
    console.log(`Account Balance: ${balance.toString()}`);

    const Token = await ethers.getContractFactory('Token');
    const token = await Token.deploy();
    console.log(`Token address: ${token.address}`);
    */
