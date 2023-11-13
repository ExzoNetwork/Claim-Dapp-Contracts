## Merkle Airdrop

## Run locally
```yarn install```

Copy and paste address:balance pair in `/scripts/example.json` , run ```yarn generate-merkle-root:example ``` , copy the output , paste it inside `/scripts/deployMerkleDistributor.js` , run ```npx hardhat run scripts/deployMerkleDistributor.js --network mainnet``` copy the address and abi,then u are good to go, generate the proof file using ```yarn generate``` and paste it in fe - claims.json file