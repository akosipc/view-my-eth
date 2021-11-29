import React from 'react'
import PropTypes from 'prop-types'

import {
  Flex,
  Text,
  Button
} from '@chakra-ui/react'

import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange
}) => {
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
    >
      <Button
        size='xs'
        disabled={ 1 === currentPage }
        onClick={ () => { onPageChange(-1) } }
        colorScheme='teal'
      >
        <ChevronLeftIcon/>
      </Button>

      <Text
        size='sm'
        mx={ 4 }
      >
        {
          `Page ${currentPage} of ${totalPages}`
        }
      </Text>

      <Button
        size='xs'
        disabled={ totalPages === currentPage }
        onClick={ () => { onPageChange(1) } }
        colorScheme='teal'
      >
        <ChevronRightIcon/>
      </Button>
    </Flex>
  )
}

export default Pagination

Pagination.propTypes = {
  totalPages: PropTypes.integer,
  currentPage: PropTypes.integer,
  onPageChange: PropTypes.func
}
