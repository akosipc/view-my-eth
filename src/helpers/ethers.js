import { ethers } from 'ethers'

export const connectWallet = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any")

  await provider.send("eth_requestAccounts", [])

  const signer = provider.getSigner()

  return await signer.getAddress()
}

export const fetchTransactions = async (walletAddress) => {
  if (walletAddress === null) {
    return false
  }

  const provider = new ethers.providers.EtherscanProvider()

  return await provider.getHistory(walletAddress)
}
