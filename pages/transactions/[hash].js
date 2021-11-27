import useSWR from 'swr'
import { useState } from 'react'

import { fetchTransaction } from '../../src/helpers/fetcher'
import { formatHexToDecimal } from '../../src/helpers/ethers'

const Transaction = ({ hash }) => {
  const { transaction, isLoading, isError } = fetchTransaction(hash)

  if (isLoading) { return '' }
  if (isError) { return '' }

  return (
    <>
      Transaction Hash: { transaction.hash }
      <br/>
      Status: { }
      <br/>
      Block: { formatHexToDecimal(transaction.blockNumber) }

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
