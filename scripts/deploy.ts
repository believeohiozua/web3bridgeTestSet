import { ethers } from "hardhat";

// CONTRACT ADDRESS: 0x97310961DDabB4C2b9222eEea31d39557689e9B8

async function main() {
  const amount = ethers.utils.parseEther("1");
  const minAmount = 1;
  const numberOfPlayers = 10;

  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy(minAmount, numberOfPlayers);

  await lottery.deployed();

  console.log(`Lottery contract has been deployed to ${lottery.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
