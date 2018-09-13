import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import './home.css'

const Home = props => (
  <div id='homeWrapper'>

    <section className='section'>
      <img src='./src/Assets/donny.jpg' class='profPic' />
    </section>

    <section className='welcome'>
      Donny Ramier
    </section>
    <section className='welcome'>
      Full Stack Developer
    </section>

  </div>
)
export default Home
