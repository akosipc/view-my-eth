import React from 'react'
import PropTypes from 'prop-types'

import Pagination from './Pagination'
import {
  TableCaption,
  Table,
  Tbody,
  Thead,
  Tr,
  Th
} from '@chakra-ui/react'

const MetaTable = ({ 
  headers = [], 
  pagination,
  children 
}) => {
  return (
    <Table size='sm'>
      <Thead>
        <Tr>
          {
            headers.map((header, index) => (
              <Th 
                key={ index }
                textAlign={ headers.length - 1 === index ? 'right' : 'center' }
              >
                { header }
              </Th>
            ))
          }
        </Tr>
      </Thead>
      <Tbody>
        { children }
      </Tbody>

      <TableCaption
        align='center'
      >
        <Pagination { ...pagination }/>
      </TableCaption>
    </Table>
  )
}

export default MetaTable

MetaTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  pagination: PropTypes.shape({
    totalPages: PropTypes.integer,
    currentPage: PropTypes.integer,
    onPageChange: PropTypes.func
  })
}
