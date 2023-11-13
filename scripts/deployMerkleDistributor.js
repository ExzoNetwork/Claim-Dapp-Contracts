require('dotenv').config()
require('@nomiclabs/hardhat-ethers')
const { ethers } = require('hardhat')

async function main() {
  const MerkleDistributor = await ethers.getContractFactory('MerkleDistributor')
  const merkleDistributor = await MerkleDistributor.deploy(
    '0x58fa146077d723e7c65bDb16454589E03f3d914e',//TODO:REPLACE ADDRESS
    '0x3d82ea98a48ce1c37258d7f8a1cb64df2e6dcd482c6d4d0dd12c88d7b156e925'//TODO:REPLACE ROOT HASH
  )
  await merkleDistributor.deployed()
  console.log(`merkleDistributor deployed at ${merkleDistributor.address}`)
}

main()
  // eslint-disable-next-line no-process-exit
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    // eslint-disable-next-line no-process-exit
    process.exit(1)
  })
