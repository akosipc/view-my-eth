import React from 'react'
import PropTypes from 'prop-types'

import { 
  QuestionOutlineIcon
} from '@chakra-ui/icons'

import {
  Box,
  Tag,
  Text,
  Tooltip
} from '@chakra-ui/react'

const MetaLabel = ({ text, helper }) => {
  return (
    <>
      <CustomTooltip label={ helper }>
        <QuestionOutlineIcon/>
      </CustomTooltip>

      <Text fontSize="md">
        { text }
      </Text>
    </>
  )
}

const CustomTooltip = ({ label, children }) => {
  return (
    <Tooltip label={ label }>
      <CustomCard>
        { children }
      </CustomCard>
    </Tooltip>
  )
}

const CustomCard = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <Box p="1">
      <Tag ref={ref} {...rest}>
        {children}
      </Tag>
    </Box>
  )
})

export default MetaLabel

MetaLabel.propTypes = {
  text: PropTypes.string.isRequired,
  helper: PropTypes.string.isRequired
}
