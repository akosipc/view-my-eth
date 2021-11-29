import { useState, useEffect } from 'react'

import { etherscanProvider } from '../src/helpers/ethers'

import { fetchBlockByNumber } from '../src/helpers/fetcher'
import { formatHexToWords } from '../src/helpers/web3'

import { PanelLoader } from '../src/components/Loader/Loader'
import { Panel, PanelHeader, PanelBody } from '../src/components/Panel'
import { MetaTable, MetaRow, BLOCK_TYPE } from '../src/components/MetaTable'

const Home = () => {
  const [blocks, setBlocks] = useState([])

  useEffect(() => {
    const provider = etherscanProvider()
    
    provider.on("block", async (blockNumber) => {
      let data = await fetchBlockByNumber(blockNumber)

      setBlocks((pepe) => { return [...pepe, data.block] })
    })
  }, [])

  
  const comparator = (x, y) => {
    let xNumber = formatHexToWords(x.number)
    let yNumber = formatHexToWords(y.number)

    if (xNumber > yNumber) { return 1 }
    if (xNumber < yNumber) { return -1 }
    return 0
  }

  return (
    <Panel>
      <PanelHeader title={ 'Latest Blocks' }/>

      <PanelBody>
        <MetaTable
          headers={['Block Number', 'No. of Transactions', 'Gas Used', 'Gas Limit']}
        >
          { blocks.sort(comparator).slice(-10).map((block, index) => (
            <MetaRow
              key={index}
              contentType={ BLOCK_TYPE }
              { ...block }
            />
          ))}
        </MetaTable>
      </PanelBody>
    </Panel>
  )
}

export default Home
