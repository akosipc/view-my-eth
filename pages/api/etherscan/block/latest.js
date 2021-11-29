import { etherscanProvider } from '../../../../src/helpers/ethers'

export default async function handler (req, res) {
  const provider = etherscanProvider()

  const latestBlockNumber = await provider.perform("getBlockNumber")

  res.status(200).json({
    latestBlockNumber: latestBlockNumber,
    blocks: [ 
      await provider.perform('getBlock', { blockTag: latestBlockNumber })
    ]
  })
}
