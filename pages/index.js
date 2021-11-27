import Head from 'next/head'

import { useState, useEffect } from 'react'

import { connectWallet, fetchTransactions } from '../src/helpers/ethers'

import { ethers } from 'ethers'

const Home = () => {
  const [walletAddress, setWalletAddress] = useState(null)

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
