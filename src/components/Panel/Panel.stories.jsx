import React from 'react'

import Panel from './Panel'
import PanelBody from './PanelBody'
import PanelHeader from './PanelHeader'

const PanelStory = {
  title: 'Components/Panel',
  component: Panel
}

export const Default = () => {
  return (
    <Panel>
      <PanelBody>
        This is a test body
      </PanelBody>
    </Panel>
  )
}

export default PanelStory
