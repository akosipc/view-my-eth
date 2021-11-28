import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'

import {
  CheckIcon,
  CloseIcon
} from '@chakra-ui/icons'

import {
  Flex,
  Text,
  Button
} from '@chakra-ui/react'

const MetaContent = ({ 
  text, 
  failed = false,
  success = false,
  clipboardable = false,
  children
}) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text) => {
    return document.execCommand('copy', true, text)
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
      { success && <CheckIcon/> }
      { failed && <CloseIcon/> }

      {
        children ? children : 
          <Text
            css={css`
              margin: 0px 8px;
            `}
          >
            { text }
          </Text>
      }

      {
        clipboardable &&
          <Button 
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
  text: PropTypes.string.isRequired,
  failed: PropTypes.bool,
  success: PropTypes.bool,
  clipboardable: PropTypes.bool
}
