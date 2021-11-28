import React from 'react'

import {
  Box
} from '@chakra-ui/react'

const PanelBody = ({ children }) => {
  return (
    <Box 
      px={ 2 }
      py={ 3 }
    >
      { children }
    </Box>
  )
}

export default PanelBody
