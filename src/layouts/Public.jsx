import React from 'react'

import Navbar from '../components/Navbar/Navbar'

import { 
  Box,
  Container
} from '@chakra-ui/react'

const Public = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Container maxW='container.xl'>
        { children }
      </Container>
    </Box>
  )
}

export default Public
