import { etherscanProvider } from '../../../../src/helpers/ethers'

export default async function handler (req, res) {
  const provider = etherscanProvider()

  res.status(200).json({block: await provider.perform("getBlock", { blockTag: req.query.id, includeTransactions: true })})
}
