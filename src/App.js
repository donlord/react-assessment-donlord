import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import './App.css'

class App extends Component {
  handleClickMeClicked = () => {
    this.setState(currState => ({
      buttonText: currState.buttonText === 'Click Me'
        ? 'I Was Clicked!'
        : 'Click Me'
    }))
  }

  render () {
    return (
      <div>
        <Route path='/' render={() => <Navbar />} />
        <Route path='/home' render={() => <Home />} />
        <Route path='/about' render={() => <About />} />
        <Route path='/projects' render={() => <Projects />} />
        <Route path='/contact' render={() => <Contact />} />
      </div>
    )
  }
}

export default App
