import React from 'react'

import MetaTable from './MetaTable'

const MetaTableStory = {
  title: 'Components/MetaTable',
  component: MetaTable
}

const Template = (args) => {
  return (
    <MetaTable {...args}/>
  )
}

export const Default = Template.bind({})
Default.args = {
  headers: ['Txn Hash', 'Block', 'Age', 'From', 'To', 'Value']
}

export default MetaTableStory
