import { ChakraProvider } from '@chakra-ui/react'

import Public from '../src/layouts/Public'
import { WalletProvider } from '../src/contexts/WalletContext'

const MyApp = ({ Component, pageProps }) => {
  return (
    <WalletProvider>
      <ChakraProvider>
        <Public>
          <Component {...pageProps} />
        </Public>
      </ChakraProvider>
    </WalletProvider>
  )
}

export default MyApp
