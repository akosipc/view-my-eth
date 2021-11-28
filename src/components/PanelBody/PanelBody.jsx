import React from 'react'

import {
  Box
} from '@chakra-ui/react'

const PanelBody = ({ children }) => {
  return (
    <Box 
      px={ 4 }
      py={ 6 }
    >
      { children }
    </Box>
  )
}

export default PanelBody
