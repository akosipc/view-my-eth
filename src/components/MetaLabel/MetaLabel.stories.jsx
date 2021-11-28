import React from 'react'

import MetaLabel from './MetaLabel'

export const Default = () => {
  return (
    <MetaLabel
      text={ 'Block' }
      helper={ 'Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was mined.' }
    />
  )
}

const MetaLabelStory = {
  title: 'Components/MetaLabel',
  component: MetaLabel
}

export default MetaLabelStory
