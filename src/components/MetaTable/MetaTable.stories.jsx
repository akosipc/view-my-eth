import React from 'react'

import MetaTable from './MetaTable'
import { TransactionRow } from './MetaRow'

const MetaTableStory = {
  title: 'Components/MetaTable',
  component: MetaTable
}

const Template = (args) => {
  return (
    <MetaTable {...args}>
      <TransactionRow
        to='0x9b9647431632af44be02ddd22477ed94d14aacaa'
        from='0xa1d8d972560c2f8144af871db508f0b0b10a3fbf'
        hash='0x5985de8623b861246eccbe8b0430e7d264b7ce803a457ed7cc677bbecbc91687'
        value='0x0'
        blockNumber='0xd12604'
      />
    </MetaTable>
  )
}

export const Default = Template.bind({})
Default.args = {
  headers: ['Txn Hash', 'Block', 'Age', 'From', 'To', 'Value'],
  pagination: {
    totalPages: 3,
    currentPage: 1,
    onPageChange: () => { }
  }
}

export default MetaTableStory
