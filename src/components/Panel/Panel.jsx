import React from 'react'

import {
  Box
} from '@chakra-ui/react'

const Panel = ({ children }) => {
  return (
    <Box
      border='1px'
      boxShadow='md'
      borderColor='gray.300'
      borderRadius='8'
    >
      { children }
    </Box>
  )
}

export default Panel
