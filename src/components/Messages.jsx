import React from 'react'
import "../style/Messages.scss";
import Message from '../components/Message'

const Messages = () => {
  return (
    <div className='messages'> 
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />

    </div>
  )
}

export default Messages