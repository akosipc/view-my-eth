import { WalletProvider } from '../src/contexts/WalletContext'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }) => {
  return (
    <WalletProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </WalletProvider>
  )
}

export default MyApp
