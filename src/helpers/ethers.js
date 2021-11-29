import { ethers } from 'ethers'

export const connectWallet = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any")

  await provider.send("eth_requestAccounts", [])

  const signer = provider.getSigner()

  return await signer.getAddress()
}

export const fetchTransactions = async (walletAddress) => {
  // I wonder if we should try to raise an exception when the walletAddress is null
  if (walletAddress === null) {
    return []
  }

  //Change me into an ENV var later
  const provider = new ethers.providers.EtherscanProvider(null, 'A998AAAQK97YQW2CGGQ2HF4UN9VEI3ISVT')

  return await provider.getHistory(walletAddress)
}

export const formatHexToDecimal = (hex) => {
  return ethers.utils.formatEther(hex)
}
export const etherscanProvider = () => { return new ethers.providers.EtherscanProvider(null, 'A998AAAQK97YQW2CGGQ2HF4UN9VEI3ISVT') }
