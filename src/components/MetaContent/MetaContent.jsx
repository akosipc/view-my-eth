import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'

import {
  Flex,
  Text,
  Button
} from '@chakra-ui/react'

const MetaContent = ({ 
  text, 
  clipboardable = false,
  children
}) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  const handleCopyClicked = useCallback(() => {
    copyToClipboard(text)
    setCopied(true)

    const timer = setTimeout(() => {
      setCopied(false)
    }, 1000)
  }, [text])

  return (
    <Flex 
      flexBasis='75%'
      alignItems='center'
    >
      {
        children ? children : 
          <Text>
            { text }
          </Text>
      }

      {
        clipboardable &&
          <Button 
            ml={ 4 }
            onClick={ () => { handleCopyClicked() } } 
            variant="ghost"
            disabled={ copied }
            colorScheme="teal"
          >
            { copied ? 'Copied' : 'Copy' }
          </Button>
      }
    </Flex>
  )
}

export default MetaContent

MetaContent.propTypes = {
  text: PropTypes.string,
  clipboardable: PropTypes.bool
}
