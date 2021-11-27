import { useState, useEffect } from 'react'

import { useWallet } from '../../src/contexts/WalletContext'
import { connectWallet, fetchTransactions, formatHexToDecimal } from '../../src/helpers/ethers'

const Transaction = ({ hash }) => {
  const {walletAddress, setWalletAddress} = useWallet()
  const {transactions, setTransactions} = useWallet()

  const [transaction, setTransaction] = useState(null)

  
  useEffect(() => {
    let settingWalletAddress = async () => { setWalletAddress(await connectWallet()) }
    settingWalletAddress()
  }, [setWalletAddress])

  useEffect(() => {
    let settingTransactions = async () => { setTransactions(await fetchTransactions(walletAddress)) }
    settingTransactions()
  }, [walletAddress])

  useEffect(() => {
    setTransaction(transactions.find((tx => { return tx.hash === hash })))
  }, [transactions])

  if (transaction === undefined || transaction === null) {
    return (
      <div/>
    )
  }

  console.log(transaction)

  return (
    <>
      Transaction Hash: { transaction.hash }
      <br/>
      Status: { }
      <br/>
      Block: { transaction.blockNumber }

      <br/>
      Block Confirmations: { transaction.confirmations }
      
      <br/>
      TimeStamp: { transaction.timestamp }

      <hr/>

      From: { transaction.from }
      <br/>
      To: { transaction.to }

      <hr/>

      Value: { formatHexToDecimal(transaction.value) }

      <br/>
      Transaction Fee:

      <hr/>

      Gas Price: { formatHexToDecimal(transaction.gasPrice) }

      <br/>
      Ether Price: 



    </>
  )
}

export default Transaction

export const getServerSideProps = async (context) => {
  return {
    props: {
      hash: context.params.hash
    }
  }
}
