import React from 'react'
import PropTypes from 'prop-types'

import {
  Table,
  Tbody,
  Thead,
  Tr,
  Th
} from '@chakra-ui/react'

const MetaTable = ({ headers = [], children }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          {
            headers.map((header, index) => (
              <Th key={ index }>
                { header }
              </Th>
            ))
          }
        </Tr>
      </Thead>
      <Tbody>
        { children }
      </Tbody>
    </Table>
  )
}

export default MetaTable

MetaTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string)
}
