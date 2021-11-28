import React from 'react'

import MetaItem from './MetaItem'
import MetaLabel from '../MetaLabel/MetaLabel'
import MetaContent from '../MetaContent/MetaContent'

export default {
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
