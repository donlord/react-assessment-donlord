import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = (
  props //   <header>
) => (
  <nav>
    <div className='name'>
      Donny Ramier
    </div>

    <ul className='links'>
      <NavLink exact to='/home'> Home</NavLink>
      <NavLink exact to='/about'>About</NavLink>
      <NavLink exact to='/projects'>Project</NavLink>
      <NavLink exact to='/contact'>Contact</NavLink>

    </ul>
  </nav>
)
//   </header>
export default Navbar
