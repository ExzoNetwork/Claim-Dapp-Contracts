require('dotenv').config()
require('@nomiclabs/hardhat-ethers')
const { ethers } = require('hardhat')

async function main() {
  const MerkleDistributor = await ethers.getContractFactory('MerkleDistributor')
  const merkleDistributor = await MerkleDistributor.deploy(
    '0xD098A30AE6C4A202DAD8155DC68e2494eBAc871c', //TODO:REPLACE ADDRESS
    '0x98b0f46bc8a1f020766f49be102664751d0fcc698a88d2cf15bda8f1c536ebfb' //TODO:REPLACE ROOT HASH
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
