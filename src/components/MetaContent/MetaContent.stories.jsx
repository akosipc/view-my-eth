import React from 'react'

import Link from 'next/link'
import MetaContent from './MetaContent'

const MetaContentStory = {
  title: 'Components/MetaContent',
  component: MetaContent
}

export const Default = () => {
  return (
    <MetaContent
      text={ '0.019197032366608107 Ether ($78.03)' }
    />
  )
}

export const successBlock = () => {
  return (
    <MetaContent
      text={ 'Success' }
      success
    />
  )
}

export const failedBlock = () => {
  return (
    <MetaContent
      text={ 'Failed' }
      failed
    />
  )
}

export const withClipboard = () => {
  return (
    <MetaContent
      text= { '0x72b4371a0bc39c3de5dc0939cd7185686c84d4710ad637c2da8a24418c26c0bc' }
      clipboardable
    />
  )
}

export const withLink = () => {
  return (
    <MetaContent>
      <Link href={ '/' }>
        0xe1997c479a35ca8f6e3a5343ff866490b63debcf
      </Link>
    </MetaContent>
  )
}


export default MetaContentStory
