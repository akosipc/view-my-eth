import axios from 'axios'
import useSWR from 'swr'

const fetcher = async (url) => {
  return axios({
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

export const fetchLatestBlocks = () => {
  const { data, error } = useSWR(`/api/etherscan/block/latest`, fetcher)

  return {
    blocks: data?.blocks,
    isError: error,
    isLoading: !error && !data,
    latestBlockNumber: data?.latestBlockNumber
  }
}

export default fetcher
