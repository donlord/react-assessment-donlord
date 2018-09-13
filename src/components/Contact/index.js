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

      <div id='logolinks'>
        <a target='_blank' href='https://github.com/donlord'>
          <img
            src='./src/Assets/github.png'
            className='logo'
            alt='github logo'
          />
        </a>
      </div>
      <div id='logolinks'>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/donny-ramier-8532bb149/'
        >
          <img
            src='./src/Assets/linkedin.png'
            className='logo'
            alt='linkedin logo'
          />
        </a>
      </div>
      <div id='logolinks'>
        <a
          target='_blank'
          href='https://drive.google.com/open?id=0ByrWpk9CVYmWMDd6eXZTYVRMUU5RWWFtWGdKTUxJRG1aS19r'
        >
          <img
            src='./src/Assets/resume.png'
            className='logo'
            alt='resume logo'
          />
        </a>
      </div>
    </div>
  </div>
)
export default Contact
