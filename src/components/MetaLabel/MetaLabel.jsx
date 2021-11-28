import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'

import { 
  QuestionOutlineIcon
} from '@chakra-ui/icons'

import {
  Box,
  Tag,
  Flex,
  Text,
  Tooltip
} from '@chakra-ui/react'

const MetaLabel = ({ text, helper }) => {
  return (
    <Flex 
      p={ 2 }
      flexBasis='25%'
      alignItems='center'
    >
      <CustomTooltip label={ helper }>
        <QuestionOutlineIcon/>
      </CustomTooltip>

      <Text 
        css={css`
          margin-left: 16px;
          font-weight: 500;
        `}
        fontSize="md">
        { text }
      </Text>
    </Flex>
  )
}

const CustomTooltip = ({ label, children }) => {
  return (
    <Tooltip label={ label }>
      { children }
    </Tooltip>
  )
}

export default MetaLabel

MetaLabel.propTypes = {
  text: PropTypes.string.isRequired,
  helper: PropTypes.string
}
