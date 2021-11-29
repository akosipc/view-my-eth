import { Link as NextLink } from 'next'
import { 
  Link,
  Badge,
  Divider 
} from '@chakra-ui/react'

import { fetchTransaction, fetchLatestBlock } from '../../src/helpers/fetcher'
import { formatHexToDecimal } from '../../src/helpers/ethers'
import { formatHexToWords } from '../../src/helpers/web3'

import { PanelLoader } from '../../src/components/Loader/Loader'
import { Panel, PanelHeader, PanelBody } from '../../src/components/Panel'
import { MetaList, MetaItem, MetaLabel, MetaContent, SuccessBlock, FailureBlock } from '../../src/components/MetaList'

const Transaction = ({ hash }) => {
  const { transaction, currentBlock, isLoading, isError } = fetchTransaction(hash)

  if (isLoading) { return <PanelLoader panelTitle='Transaction Details'/> }
  if (isError) { return '' }

  return (
    <Panel>
      <PanelHeader title='Transaction Details' />
      <PanelBody>
        <MetaList>
          <MetaItem>
            <MetaLabel text='Transaction Hash:' />

            <MetaContent
              text={ transaction.hash }
              clipboardable
            />
          </MetaItem>

          <MetaItem>
            <MetaLabel text='Status:' />

            <MetaContent>
              {
                transaction.value === '0x0' ?
                  <FailureBlock/> :
                  <SuccessBlock/>
              }
            </MetaContent>
          </MetaItem>

          <MetaItem>
            <MetaLabel text='Block:' />

            <MetaContent>
              <Link 
                as={ NextLink }
                href={ `/blocks/${transaction.blockNumber}` }
                color='blue.500'
              >
                { formatHexToWords(transaction.blockNumber) }
              </Link>
              &nbsp;
              <Badge colorScheme='teal'> 
                { `${formatHexToWords(currentBlock) - formatHexToWords(transaction.blockNumber)} Confirmations` }
              </Badge>
            </MetaContent>
          </MetaItem>

          <MetaItem>
            <MetaLabel text='Timestamp:' />

            <MetaContent>
            </MetaContent>
          </MetaItem>

          <Divider my={ 4 }/>

          <MetaItem>
            <MetaLabel text='From:' />

            <MetaContent
              text={ transaction.from }
              clipboardable
            >
              <Link 
                as={ NextLink }
                href={ `/wallets/${transaction.from}` }
                color='blue.500'
              >
                { transaction.from }
              </Link>
            </MetaContent>
          </MetaItem>

          <MetaItem>
            <MetaLabel text='To:' />

            <MetaContent
              text={ transaction.to }
              clipboardable
            >
              <Link 
                as={ NextLink }
                href={ `/wallets/${transaction.to}` }
                color='blue.500'
              >
                { transaction.to }
              </Link>
            </MetaContent>
          </MetaItem>

          <Divider my={ 4 }/>

          <MetaItem>
            <MetaLabel text='Value:' />

            <MetaContent
              text={ formatHexToDecimal(transaction.value) }
            />
          </MetaItem>

          <MetaItem>
            <MetaLabel text='Gas Price:' />

            <MetaContent
              text={ formatHexToDecimal(transaction.gasPrice) }
            />
          </MetaItem>

          <MetaItem>
            <MetaLabel text='Ether Price:' />
          </MetaItem>
        </MetaList>
      </PanelBody>
    </Panel>
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
