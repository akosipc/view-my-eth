import React from 'react'

import {
  CloseIcon
} from '@chakra-ui/icons'

import {
  Flex,
  Text
} from '@chakra-ui/react'

const FailureBlock = () => {
  return (
    <Flex
      px={ 2 }
      py={ 1 }
      alignItems='center'
      background='red.200'
      borderRadius='4'
    >

      <CloseIcon
        mr={ 2 }
        color='red.600'
        fontSize='sm'
      />

      <Text
        fontSize='sm'
        color='red.600'
      >
        Failed
      </Text>
    </Flex>
  )
}

export default FailureBlock
