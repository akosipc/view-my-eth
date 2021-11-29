import { etherscanProvider } from '../../../../src/helpers/ethers'

export default async function handler (req, res) {
  const provider = etherscanProvider()

  const transaction = await provider.perform("getTransaction", { transactionHash: req.query.id }) 

  res.status(200).json({ 
    txBlock: await provider.perform("getBlock", { blockTag: transaction.blockNumber }),
    transaction: transaction,
    latestBlock: await provider.perform("getBlockNumber")
  })
}
