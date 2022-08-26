import { ethers } from "hardhat";

async function main() {
  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(["Amara", "Chidimma"]);

  await voting.deployed();

  console.log("contract deployed at : ", voting.address);
}

// contract address rinkeby : 0x9e4b290B77823d42D1BF07e5A0b94A7C0bd13393

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
