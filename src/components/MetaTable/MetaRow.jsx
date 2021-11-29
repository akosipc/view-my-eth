import React from 'react'
import PropTypes from 'prop-types'

import {
  Td,
  Tr,
  Link,
  Text
} from '@chakra-ui/react'

import { formatHexToDecimal } from '../../helpers/ethers'

export const TRANSACTION_TYPE = 'transaction'

const MetaRow = (props) => {
  if (props.contentType === TRANSACTION_TYPE) {
    return (
      <TransactionRow { ...props } />
    )
  }
}

const TransactionRow = ({ 
  to,
  from,
  hash,
  value,
  blockNumber,
}) => {
  return (
    <Tr>
      <Td> 
        <Link
          href={ `transactions/${hash}` }
          color='blue.500'
        >
          <Text maxWidth={ 200 } isTruncated >
            { hash } 
          </Text>
        </Link>
      </Td>
      <Td> 
        <Link
          href={ `blocks/${blockNumber}` }
          color='blue.500'
        >
          { formatHexToDecimal(blockNumber) } 
        </Link>
      </Td>
      <Td> </Td>
      <Td>
        <Link
          href={ `wallets/${from}` }
          color='blue.600'
        >
          <Text maxWidth={ 200 } isTruncated>
            { from } 
          </Text>
        </Link>
      </Td>
      <Td> 
        <Link
          href={ `wallets/${to}` }
          color='blue.600'
        >
          <Text maxWidth={ 200 } isTruncated>
          { to } 
          </Text>
        </Link>
      </Td>
      <Td isNumeric> { formatHexToDecimal(value) } </Td>
    </Tr>
  )
}

MetaRow.propTypes = {
  contentType: PropTypes.string.isRequired
}

export default MetaRow
