import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import {
  CheckIcon,
  CloseIcon
} from '@chakra-ui/icons'

import {
  Text
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
    <>
      { success && <CheckIcon/> }
      { failed && <CloseIcon/> }

      {
        children ? children : 
          <Text>
            { text }
          </Text>
      }

      {
        clipboardable &&
          <button onClick={ () => { handleCopyClicked() } } disabled={ copied }>
            { copied ? 'Copied' : 'Copy' }
          </button>
      }
    </>
  )
}

export default MetaContent

MetaContent.propTypes = {
  text: PropTypes.string.isRequired,
  failed: PropTypes.bool,
  success: PropTypes.bool,
  clipboardable: PropTypes.bool
}
