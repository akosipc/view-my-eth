import { useState } from 'react'

import { fetchBlock } from '../../src/helpers/fetcher'

import { PanelLoader } from '../../src/components/Loader/Loader'
import { Panel, PanelHeader, PanelBody } from '../../src/components/Panel'
import { MetaList, MetaItem, MetaLabel, MetaContent } from '../../src/components/MetaList'
import { MetaTable, MetaRow, TRANSACTION_TYPE } from '../../src/components/MetaTable'

import { formatHexToDecimal } from '../../src/helpers/ethers'
import { formatHexToWords } from '../../src/helpers/web3'

import {
  Th,
  Tr,
  Table,
  Thead,
  Tbody,
  Divider
} from '@chakra-ui/react'

const PER_PAGE = 8

const Block = ({ hash }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { block, isLoading, isError } = fetchBlock(hash)

  if (isLoading) { 
    return (
      <>
        <PanelLoader panelTitle={ `Block #${formatHexToWords(hash)}` } /> 
        <PanelLoader panelTitle='Transactions' /> 
      </>
    )
  }
  if (isError) { return '' }

  return (
    <>
      <Panel>
        <PanelHeader title={ `Block #${formatHexToWords(block.number)}` } />
        <PanelBody>
          <MetaList>
            <MetaItem>
              <MetaLabel text='Block Height:'/>

              <MetaContent text={ `${formatHexToWords(block.number)}` } />
            </MetaItem>

            <MetaItem>
              <MetaLabel text='Timestamp:'/>

              <MetaContent 
                text={ `${formatHexToWords(block.timestamp)}` } 
                isDate
              />
            </MetaItem>

            <MetaItem>
              <MetaLabel text='Transactions: '/>

              <MetaContent text={ `${block.transactions.length} Transactions` }/>
            </MetaItem>

            <Divider my={ 4 } />

            <MetaItem>
              <MetaLabel text='Gas Used:'/>
              <MetaContent text={ formatHexToDecimal(block.gasUsed) } />
            </MetaItem>

            <MetaItem>
              <MetaLabel text='Gas Limit:'/>
              <MetaContent text={ formatHexToDecimal(block.gasLimit) } />
            </MetaItem>
          </MetaList>
        </PanelBody>
      </Panel>

      <Panel>
        <PanelHeader title='Transactions'/>
        <PanelBody>
          <MetaTable 
            headers={ ['Txn Hash', 'Block', 'Age', 'From', 'To', 'Value'] }
            pagination={{
              totalPages: Math.round(block.transactions.length / PER_PAGE),
              currentPage: currentPage,
              onPageChange: (direction) => { setCurrentPage(currentPage + direction)}
            }}
          >
            {
              block.transactions.slice((currentPage * PER_PAGE - 7), currentPage * PER_PAGE + 1).map((tx) => (
                <MetaRow 
                  key={ tx.hash }
                  contentType={ TRANSACTION_TYPE }
                  { ...tx }
                />
              ))
            }
          </MetaTable>
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
