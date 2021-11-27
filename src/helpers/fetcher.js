import axios from 'axios'
import useSWR from 'swr'

const fetcher = async (url) => {
  return axios({
    url: url
  }).then(res => { return res.data }).catch(res => { throw res.data })
}

export const fetchTransaction = (hash) => {
  const { data, error } = useSWR(`/api/etherscan/tx/${hash}`, fetcher)

  console.log(data)

  return {
    isError: error,
    isLoading: !error && !data,
    transaction: data?.transaction
  }
}

export default fetcher
