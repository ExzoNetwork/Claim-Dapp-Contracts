import { program } from 'commander'
import fs from 'fs'
import { parseBalanceMap } from '../src/parse-balance-map'

program
  .version('0.0.0')
  .requiredOption(
    '-i, --input <path>',
    'input JSON file location containing a map of account addresses to string balances'
  )

program.parse(process.argv)

const json = JSON.parse(fs.readFileSync(program.input, { encoding: 'utf8' }))

if (typeof json !== 'object') throw new Error('Invalid JSON')

const res = parseBalanceMap(json)
fs.writeFileSync('./claims.json', JSON.stringify({ res }, null, 2))

// let tree:BalanceTree;

// tree = new BalanceTree(
//     pairs
// )
// console.log(tree.getHexRoot())

// console.log(res.claims)
