import { createContext, useContext, useState } from 'react'

export const WalletContext = createContext({
  walletAddress: null,
  setWalletAddress: async (walletAddress) => null,
  transactions: [],
  setTransactions: async (transactions) => null
})

export const useWallet = () => useContext(WalletContext)

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null)
  const [transactions, setTransactions] = useState([])

  return (
    <WalletContext.Provider value={{ transactions, walletAddress, setTransactions, setWalletAddress }}>
      { children }
    </WalletContext.Provider>
  )
}
