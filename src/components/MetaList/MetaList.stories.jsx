import React from 'react'

import Link from 'next/link'

import MetaList from './MetaList'
import MetaItem from '../MetaItem/MetaItem'
import MetaLabel from '../MetaLabel/MetaLabel'
import MetaContent from '../MetaContent/MetaContent'
import SuccessBlock from '../MetaContent/SuccessBlock'
import FailureBlock from '../MetaContent/FailureBlock'

const MetaListStory = {
  title: 'Components/MetaList',
  component: MetaList
}

export const Default = () => {
  return (
    <MetaList>
      <MetaItem>
        <MetaLabel
          text='Transaction Hash'
          helper='A TxHash or transaction hash is a unique 66-character identifier that is generated whenever a transaction is executed.'
        />

        <MetaContent
          text='0x72b4371a0bc39c3de5dc0939cd7185686c84d4710ad637c2da8a24418c26c0bc'
          clipboardable
        />
      </MetaItem>

      <MetaItem>
        <MetaLabel
          text='Status'
          helper='The status of the transaction.'
        />

        <MetaContent>
          <SuccessBlock/>
        </MetaContent>
      </MetaItem>

      <MetaItem>
        <MetaLabel
          text='Status'
          helper='The status of the transaction.'
        />

        <MetaContent>
          <FailureBlock/>
        </MetaContent>
      </MetaItem>

      <MetaItem>
        <MetaLabel
          text='Block'
          helper='Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was mined.'
        />

        <MetaContent>
          <Link href={ '/' }>
            13701698
          </Link>
        </MetaContent>
      </MetaItem>
    </MetaList>
  )
}

export default MetaListStory
