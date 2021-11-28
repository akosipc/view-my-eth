import React from 'react'

import {
  Box,
  Heading
} from '@chakra-ui/react'

const PanelHeader = ({ title }) => {
  return (
    <Box
      px={ 4 }
      py={ 2 }
      borderBottom='1px'
      borderBottomColor='gray.300'
    >
      <Heading as="h4" size="lg">
        { title }
      </Heading>
    </Box>
  )
}

export default PanelHeader
