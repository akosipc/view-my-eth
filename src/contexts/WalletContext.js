import { createContext, useContext, useState } from 'react'

export const WalletContext = createContext({
  walletAddress: null,
  setWalletAddress: async (walletAddress) => null
})

export const useWallet = () => useContext(WalletContext)

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null)

  return (
    <WalletContext.Provider value={{ walletAddress, setWalletAddress }}>
      { children }
    </WalletContext.Provider>
  )
}
