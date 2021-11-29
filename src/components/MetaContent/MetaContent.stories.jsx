import React from 'react'

import Link from 'next/link'
import MetaContent from './MetaContent'
import SuccessBlock from './SuccessBlock'
import FailureBlock from './FailureBlock'

const MetaContentStory = {
  title: 'Components/MetaContent',
  component: MetaContent
}

const Template = (args) => {
  return (
    <MetaContent {...args}>
    </MetaContent>
  )
}

export const Default = Template.bind({})
Default.args = {
  text: '0.019197032366608107 Ether ($78.03)',
  clipboardable: false
}

export const ClipboardType = Template.bind({})
ClipboardType.args = {
  text: '0x72b4371a0bc39c3de5dc0939cd7185686c84d4710ad637c2da8a24418c26c0bc',
  clipboardable: true
}

export const LinkType = () => {
  return (
    <MetaContent>
      <Link href={ '/' }>
        0xe1997c479a35ca8f6e3a5343ff866490b63debcf
      </Link>
    </MetaContent>
  )
}

export const successBlock = () => {
  return (
    <MetaContent>
      <SuccessBlock/>
    </MetaContent>
  )
}

export const failedBlock = () => {
  return (
    <MetaContent>
      <FailureBlock/>
    </MetaContent>
  )
}

export const TimeBlock = () => {
  return (
    <MetaContent
      text={ `17032112` }
      isDate
    />
  )
}

export default MetaContentStory
