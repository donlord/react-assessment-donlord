import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import './Contact.css'

const Contact = () => (
  <div>
    <div className='title'>
      Let's collaborate!
    </div>

    <div className='left'>
      <div className='input'>
        Name: <br /><input type='text' className='fname' />
        <br /> Email: <br /><input type='text' className='email' /><br />
        Note: <br /><input type='text' className='msg' />

      </div>
    </div>
    <div className='right'>
      <img src='./src/Assets/github.png' className='logo' />
      <img src='./src/Assets/linkedin.png' className='logo' />
    </div>

  </div>
)
export default Contact
