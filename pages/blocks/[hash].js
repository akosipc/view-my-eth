import { fetchBlock } from '../../src/helpers/fetcher'

import { PanelLoader } from '../../src/components/Loader/Loader'
import { Panel, PanelHeader, PanelBody } from '../../src/components/Panel'
import { MetaList, MetaItem, MetaLabel, MetaContent } from '../../src/components/MetaList'

import { formatHexToDecimal } from '../../src/helpers/ethers'

import {
  Th,
  Tr,
  Table,
  Thead,
  Tbody,
  Divider
} from '@chakra-ui/react'

const Block = ({ hash }) => {
  const { block, isLoading, isError } = fetchBlock(hash)

  if (isLoading) { return <PanelLoader panelTitle={ `Block #${formatHexToDecimal(hash)}` } /> }
  if (isError) { return '' }

  console.log(block.transactions)

  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th> Txn Hash </Th>
            <Th> Age </Th>
            <Th> From </Th>
            <Th> To </Th>
            <Th> Value </Th>
          </Tr>
        </Thead>
        <Tbody>
        </Tbody>
      </Table>


      <Panel>
        <PanelHeader title={ `Block #${formatHexToDecimal(block.number)}` } />
        <PanelBody>
          <MetaList>
            <MetaItem>
              <MetaLabel text='Block Height'/>

              <MetaContent text={ formatHexToDecimal(block.number) } />
            </MetaItem>

            <MetaItem>
              <MetaLabel text='Timestamps'/>

              <MetaContent text={ formatHexToDecimal(block.timestamp) } />
            </MetaItem>

            <MetaItem>
              <MetaLabel text='Transactions'/>

              <MetaContent text={ `${block.transactions.length} Transactions` }/>
            </MetaItem>

            <Divider my={ 4 } />

            <MetaItem>
              <MetaLabel text='Difficulty'/>

              <MetaContent text={ formatHexToDecimal(block.difficulty) } />
            </MetaItem>

            <MetaItem>
              <MetaLabel text='Total Difficulty'/>

              <MetaContent text={ formatHexToDecimal(block.totalDifficulty) } />
            </MetaItem>

            <MetaItem>
              <MetaLabel text='Size'/>

              <MetaContent text={ formatHexToDecimal(block.size) } />
            </MetaItem>

            <Divider my={ 4 } />

            <MetaItem>
              <MetaLabel text='Gas Used'/>
              <MetaContent text={ formatHexToDecimal(block.gasUsed) } />
            </MetaItem>

            <MetaItem>
              <MetaLabel text='Gas Limit'/>
              <MetaContent text={ formatHexToDecimal(block.gasLimit) } />
            </MetaItem>
          </MetaList>
        </PanelBody>
      </Panel>
    </>
  )
}

export default Block

export const getServerSideProps = async (context) => {
  return {
    props: {
      hash: context.params.hash
    }
  }
}
