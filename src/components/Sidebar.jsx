import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
import "../style/Sidebar.scss"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar />
      <Search />
      <Chats />
      <Chats />
      <Chats />
    </div>
  )
}

export default Sidebar