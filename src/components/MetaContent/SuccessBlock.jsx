import React from 'react'

import {
  CheckIcon
} from '@chakra-ui/icons'

import {
  Flex,
  Text
} from '@chakra-ui/react'

const SuccessBlock = () => {
  return (
    <Flex
      px={ 2 }
      py={ 1 }
      alignItems='center'
      background='green.200'
      borderRadius='4'
    >

      <CheckIcon
        mr={ 2 }
        color='green.600'
        fontSize='sm'
      />

      <Text
        fontSize='sm'
        color='green.600'
      >
        Success
      </Text>
    </Flex>
  )
}

export default SuccessBlock
