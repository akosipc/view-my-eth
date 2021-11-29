import React from 'react'

import Public from './Public'

import { PanelLoader } from '../components/Loader/Loader'

const PublicLayoutStory = {
  title: 'Layouts/Public',
  component: Public
}

export const Default = () => {
  return (
    <Public>
      <PanelLoader
        panelTitle='Transaction Details'
      />
    </Public>
  )
}

export default PublicLayoutStory
