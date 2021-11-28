import React from 'react'

import {
  Flex
} from '@chakra-ui/react'

const MetaItem = ({ children }) => {
  return (
    <Flex alignItems='center'>
      { children }
    </Flex>
  )
}

export default MetaItem
