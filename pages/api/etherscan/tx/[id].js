import { etherscanProvider } from '../../../../src/helpers/ethers'

export default async function handler (req, res) {
  const provider = etherscanProvider()

  res.status(200).json({ transaction: await provider.perform("getTransaction", { transactionHash: req.query.id }) })
}
