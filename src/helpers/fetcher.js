import axios from 'axios'
import useSWR from 'swr'

import { ethers } from 'ethers'

const fetcher = async (url) => {
  return await axios({
    url: url
  }).then(res => { return res.data }).catch(res => { throw res.data })
}

export const fetchTransaction = (hash) => {
  const { data, error } = useSWR(`/api/etherscan/tx/${hash}`, fetcher)

  return {
    isError: error,
    txBlock: data?.txBlock,
    isLoading: !error && !data,
    transaction: data?.transaction,
    currentBlock: data?.latestBlock
  }
}

export const fetchBlock = (hash) => {
  const { data, error } = useSWR(`/api/etherscan/block/${hash}`, fetcher)

  return {
    block: data?.block,
    isError: error,
    isLoading: !error && !data,
  }
}

export const fetchLatestBlocks = async () => {
  return await fetcher('/api/etherscan/block/latest')
}

export const fetchBlockByNumber = async (id) => {
  return await fetcher(`api/etherscan/block/${ethers.utils.hexValue(id)}`)
}

export default fetcher
