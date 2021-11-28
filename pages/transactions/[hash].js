import { Link as NextLink } from 'next'
import { 
  Link,
  Divider 
} from '@chakra-ui/react'

import { fetchTransaction } from '../../src/helpers/fetcher'
import { formatHexToDecimal } from '../../src/helpers/ethers'

import { Panel, PanelHeader, PanelBody } from '../../src/components/Panel'
import { MetaList, MetaItem, MetaLabel, MetaContent, SuccessBlock } from '../../src/components/MetaList'

const Transaction = ({ hash }) => {
  const { transaction, isLoading, isError } = fetchTransaction(hash)

  if (isLoading) { return '' }
  if (isError) { return '' }

  return (
    <Panel>
      <PanelHeader
        title='Transaction Details'
      />
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
              <SuccessBlock />
            </MetaContent>
          </MetaItem>

          <MetaItem>
            <MetaLabel text='Block:' />

            <MetaContent>
              <Link 
                as={ NextLink }
                href={ `/blocks/${transaction.blockHash}` }
                color='blue.500'
              >
                { formatHexToDecimal(transaction.blockNumber) }
              </Link>
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
