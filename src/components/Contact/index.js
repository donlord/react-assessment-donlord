import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import './Contact.css'

const Contact = () => (
  <div>
    <div id='title'>
      Let's collaborate!
    </div>

    <div className='leftcol'>
      <form
        action='mailto:dramier17@gmail.com'
        method='post'
        enctype='text/plain'
      >
        <div className='input'>
          Name: <br /><input type='text' className='fname' />
          <br /> Email: <br /><input type='text' className='email' /><br />
          Note: <br /><input type='text' className='msg' />
          <input id='button' type='submit' value='Send' />
        </div>
      </form>
    </div>
    <div className='rightcol'>
      <img src='./src/Assets/github.png' className='logo' />
      <img src='./src/Assets/linkedin.png' className='logo' />
    </div>

  </div>
)
export default Contact
