import { fetchBlock } from '../../src/helpers/fetchers'

const Block = ({ hash }) => {
  const { block, isLoading, isError } = fetchBlock(hash)

  if (isLoading) { return '' }
  if (isError) { return '' }

  return (
    <div/>
  )
}

export default Block

export const getServerSideProps = async (context) => {
  return {
    props: {
      hash: context.params.hash
    }
  }
}
