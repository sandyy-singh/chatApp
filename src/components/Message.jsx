import React from 'react'
import mm from "../assets/2.png";
import "../style/Message.scss";
const Message = () => {
  return (
    <div className='message owner'>
     <div className='messageInfo'>
      <img src={mm} alt='' />
      <span>just now</span>
     </div>
     <div className='messageContent'>
      <span className='msg'>hello</span>
       <img src={mm} alt='' />
     </div>
    </div>
  )
}

export default Message