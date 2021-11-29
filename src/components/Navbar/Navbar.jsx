import React from 'react'
import PropTypes from 'prop-types'

import {
  Box,
  Flex,
  Text,
  Button,
  Heading,
  Container
} from '@chakra-ui/react'

const Navbar = ({ 
  isConnecting = false,
  walletAddress 
}) => {
  return (
    <Box 
      maxW='100%'
      boxShadow='md'
    >
      <Container maxW='container.xl'>
        <Flex
          px={ 6 }
          py={ 4 }
          mb={ 4 }
          alignItems='center'
          justifyContent='space-between'
        >
          <Heading>
            Scanner
          </Heading>

          <Button 
            variant='solid'
            isLoading={ isConnecting }
            colorScheme='teal'
            loadingText='Connecting'
          >
            <Text
              isTruncated
              maxWidth='140px'
            >
              {
                walletAddress ? walletAddress : 'Connect Metamask'
              }
            </Text>
          </Button>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar

Navbar.propTypes = {
  isConnecting: PropTypes.bool,
  walletAddress: PropTypes.string
}
