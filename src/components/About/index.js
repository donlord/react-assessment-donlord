import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Typing from 'react-typing-animation'
import './About.css'

const About = props => (
  <div>
    <div className='about'>
      About Me:
    </div>
    <div className='chalkboard'>
      <img src='./src/Assets/dj3.png' className='dj' />
      <ul className='list'>
        <Typing>
          <li>Currently live in Memphis, TN and I grew up in New Jersey</li>

          <li>Rhodes College '17 Computer Science Major</li>
          <li>Began Coding with the help of my roommates</li>
          <li>Family Oriented - 3 musketeers</li>
          <li>Salvation Army Lifeguard - CPR certified</li>
          <li> Active lifestyle - Avid Sports fan, novice bodybuilder</li>
          <li> Animal lover - Shelter Volunteer and Dog Owner</li>
        </Typing>
      </ul>
      <img src='./src/Assets/amber.jpg' className='amber' />
    </div>
  </div>
)
export default About
