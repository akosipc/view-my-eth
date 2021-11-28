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

export const fetchLatestBlock = () => {
  const { data, error } = useSWR(`/api/etherscan/block/latest`, fetcher)

  return {
    block: data?.latestBlock,
    isError: error,
    isLoading: !error && !data,
  }
}

export default fetcher
