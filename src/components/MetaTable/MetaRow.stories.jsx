import React from 'react'

import {
  Table,
  Tbody
} from '@chakra-ui/react'

import MetaRow, { TRANSACTION_TYPE } from './MetaRow'

const MetaRowStory = {
  title: 'Components/MetaRow',
  component: MetaRow
}

const Template = (args) => {
  return (
    <Table>
      <Tbody>
        <MetaRow {...args}/>
      </Tbody>
    </Table>
  )
}

export const TransactionMetaRow = Template.bind({})
TransactionMetaRow.args = {
  "contentType": TRANSACTION_TYPE,
  "blockHash": "0xf7d0b0e99b0ad7ceae40974fa95f82d5cb1cd9e1f95411e41b722990f07302b8",
  "blockNumber": "0xd12604",
  "from": "0xa1d8d972560c2f8144af871db508f0b0b10a3fbf",
  "gas": "0x212f3",
  "gasPrice": "0x20a923a121",
  "hash": "0x5985de8623b861246eccbe8b0430e7d264b7ce803a457ed7cc677bbecbc91687",
  "input": "0xa9059cbb0000000000000000000000001e5a5d1f949484712154eb92c978cd94ab88b52e00000000000000000000000000000000000000000000000448586170a7dc0000",
  "nonce": "0x1c9394",
  "to": "0x9b9647431632af44be02ddd22477ed94d14aacaa",
  "transactionIndex": "0x0",
  "value": "0x0",
  "type": "0x0",
  "v": "0x26",
  "r": "0x83589471ae49e4412c85869bf12fc4c1ead5f950e89b513ee977615e6201ff96",
  "s": "0xe9f2ecbf3d6acb4b8df83de5cf0f4af7380c73d0e860b40f2d789eb0f1efcc6"
}

export default MetaRowStory
