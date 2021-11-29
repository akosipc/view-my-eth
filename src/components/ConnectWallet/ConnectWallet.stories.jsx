import React from 'react'

import ConnectWallet from './ConnectWallet'

import { WalletProvider } from '../../contexts/WalletContext'

const ConnectWalletStory = {
  title: 'Components/ConnectWallet',
  component: ConnectWallet
}

export const Default = () => {
  return (
    <WalletProvider>
      <ConnectWallet/>
    </WalletProvider>
  )
}

export default ConnectWalletStory
