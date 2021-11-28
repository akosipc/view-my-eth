import { etherscanProvider } from '../../../../src/helpers/ethers'

export default async function handler (req, res) {
  const provider = etherscanProvider()

  res.status(200).json({ 
    latestBlock: await provider.perform("getBlockNumber"),
    transaction: await provider.perform("getTransaction", { transactionHash: req.query.id }) 
  })
}
