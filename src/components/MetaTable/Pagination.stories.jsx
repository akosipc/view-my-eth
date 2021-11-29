import React from 'react'

import Pagination from './Pagination'

const PaginationStory = {
  title: 'Components/Pagination',
  component: Pagination
}

export default PaginationStory

const Template = (args) => {
  return (
    <Pagination {...args}/>
  )
}

export const Default = Template.bind({})
Default.args = {
  totalPages: 3,
  currentPage: 1,
  onPageChange: () => { }
}

export const NoMorePages = Template.bind({})
NoMorePages.args = {
  totalPages: 3,
  currentPage: 3,
  onPageChange: () => { }
}

