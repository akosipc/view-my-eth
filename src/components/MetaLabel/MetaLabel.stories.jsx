import React from 'react'

import MetaLabel from './MetaLabel'

const Template = (args) => (
  <MetaLabel {...args} />
)

const MetaLabelStory = {
  title: 'Components/MetaLabel',
  component: MetaLabel
}

export const Default = Template.bind({})
Default.args = {
  text: 'Block',
  helper: 'Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was mined.'
}

export default MetaLabelStory
