import Head from 'next/head'
import Link from 'next/link'

import { useState, useEffect } from 'react'
import { useWallet } from '../src/contexts/WalletContext'
import { connectWallet, fetchTransactions } from '../src/helpers/ethers'

const Home = () => {
  const {walletAddress, setWalletAddress} = useWallet()
  const {transactions, setTransactions} = useWallet()
  
  useEffect(() => {
    let settingTransactions = async () => {
      setTransactions(await fetchTransactions(walletAddress))
    }

    settingTransactions()
  }, [walletAddress])
  
  useEffect(() => {
    let settingWalletAddress = async () => {
      setWalletAddress(await connectWallet())
    }

    settingWalletAddress()
  }, [setWalletAddress])

  return (
    <div>
      { walletAddress }

      <br/>

      { transactions.length }

      <ul>
        { 
          transactions.map((transaction, index) => (
            <li key={ index }>
              <Link href={ `transactions/${transaction.hash}` }>
                { transaction.hash }
              </Link>
            </li>
          )) 
        }
      </ul>
    </div>
  )
}

export default Home
