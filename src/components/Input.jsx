import React from 'react'
import "../style/Input.scss"
import gall from "../assets/gall.png";
import att from "../assets/att.png";

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something...' />
      <div className='send'>
       <img src={att} alt='' />
       <input type='file' style={{display:"none"}}  id='file'/>
       <label htmlFor='file'>
       <img src={gall} alt='' />
       </label>
      </div>
      <button>send</button>   
    </div>
  )
}

export default Input