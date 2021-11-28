import React from 'react'

import MetaItem from './MetaItem'
import MetaLabel from '../MetaLabel/MetaLabel'
import MetaContent from '../MetaContent/MetaContent'

const MetaItemStory = {
  title: 'Components/MetaItem',
  component: MetaItem
}

export const Default = () => {
  return (
    <MetaItem>
      <MetaLabel
        text={ 'Block Number' }
        helper={ 'Test' }
      />
      <MetaContent
        text={ '13701698' }
      />
    </MetaItem>
  )
}

export default MetaItemStory
