import React, { useState, useEffect, useCallback } from 'react'

import {
  Text,
  Button
} from '@chakra-ui/react'

import { useWallet } from '../../contexts/WalletContext'
import { connectWallet } from '../../helpers/ethers'

const ConnectWallet = () => {
  const [isConnecting, setConnecting] = useState(false)
  const {walletAddress, setWalletAddress} = useWallet()

  const handleWalletConnect = useCallback(async () => {
    setConnecting(true)
    setWalletAddress(await connectWallet())
    setConnecting(false)
  }, [walletAddress])

  return (
    <Button 
      onClick={ async () => { await handleWalletConnect() } }
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
  )
}

export default ConnectWallet
