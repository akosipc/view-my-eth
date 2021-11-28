import React from 'react'
import PropTypes from 'prop-types'

import { Panel, PanelBody, PanelHeader } from '../Panel'

import {
  Stack,
  Skeleton
} from '@chakra-ui/react'

const Loader = ({ ...props }) => {
  return (
    <Skeleton/>
  )
}

export const PanelLoader = ({ 
  panelTitle, 
  numberOfSkeletons = 6 
}) => {
  return (
    <Panel>
      <PanelHeader title={ panelTitle } />
      <PanelBody>
        <Stack>
          {
            [...Array(numberOfSkeletons)].map((_, index) => {
              return (
                <Skeleton key={index} height='25px'/>
              )
            })
          }
        </Stack>
      </PanelBody>
    </Panel>
  )
}

PanelLoader.propTypes = {
  panelTitle: PropTypes.string.isRequired,
  numberOfSkeletons: PropTypes.number
}

export default Loader
