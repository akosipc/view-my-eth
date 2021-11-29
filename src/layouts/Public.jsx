import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar/Navbar'

import { 
  Box,
  Container
} from '@chakra-ui/react'

const Public = ({ children }) => {
  return (
    <Box>
      <Head>
        <title>
          ETH Blockchain Scanner - Just like Etherscan.io
        </title>
      </Head>

      <Navbar />
      <Container maxW='container.xl'>
        { children }
      </Container>
    </Box>
  )
}

export default Public
