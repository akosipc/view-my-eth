import Head from 'next/head'
import Link from 'next/link'

import { fetchLatestBlocks } from '../src/helpers/fetcher'

import { PanelLoader } from '../src/components/Loader/Loader'
import { Panel, PanelHeader, PanelBody } from '../src/components/Panel'
import { MetaTable, MetaRow, BLOCK_TYPE } from '../src/components/MetaTable'


const Home = () => {
  const { blocks, isError, isLoading } = fetchLatestBlocks()

  if (isLoading) { return <PanelLoader panelTitle="Latest Blocks" /> }
  if (isError) { return '' }

  return (
    <Panel>
      <PanelHeader title={ 'Latest Blocks' }/>

      <PanelBody>
        <MetaTable
          headers={['Block Number', 'No. of Transactions', 'Gas Used', 'Gas Limit']}
        >
          { blocks.map((block, index) => (
            <MetaRow
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
