import React from 'react'
import Navbar from './Navbar'

const NavbarStory = {
  title: 'Components/Navbar',
  component: Navbar
}

const Template = (args) => (
  <Navbar {...args} />
)

export const Default = Template.bind({})
Default.args = {
  walletAddress: null
}

export const WithWalletAddress = Template.bind({})
WithWalletAddress.args = {
  walletAddress: '0xE120dA146d11ec164c8153c2E514550b3E09D941'
}

export const LoadingNavbar = Template.bind({})
LoadingNavbar.args = {
  isConnecting: true,
  walletAddress: null
}

export default NavbarStory
