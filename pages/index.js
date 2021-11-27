import Head from 'next/head'

import { useEffect } from 'react'
import { useWallet } from '../src/contexts/WalletContext'
import { connectWallet, fetchTransactions } from '../src/helpers/ethers'

const Home = () => {
  const { walletAddress, setWalletAddress } = useWallet()

  useEffect(async () => {
    setWalletAddress(await connectWallet())
  }, [])

  useEffect(async () => {
    console.log(await fetchTransactions(walletAddress))
  }, [walletAddress])

  return (
    <div>
      { walletAddress }
    </div>
  )
}

export default Home
