import React from 'react'

import Loader, { PanelLoader } from './Loader'

import { Panel, PanelBody, PanelHeader } from '../Panel'
import { 
  Stack,
  Skeleton
} from '@chakra-ui/react'

const LoaderStory = {
  title: 'Components/Loader',
  component: Loader
}

const PanelTemplate = (args) => {
  return (
    <PanelLoader {...args}/>
  )
}

export const Default = () => <Loader/>
export const LoadingPanel = PanelTemplate.bind({})
LoadingPanel.args = {
  panelTitle: 'Transaction Details',
  numberOfSkeletons: 6
}

export default LoaderStory
