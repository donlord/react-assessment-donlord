import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import './Portfolio.css'

const Portfolio = props => (
  <div className='toplevel'>
    <div className='proj1'>
      <a
        target='_blank'
        href='https://github.com/cooksystemsinc/js-assessment-dev-duel-donlord'
      >
        <img className='img1' src='./src/Assets/duel.jpg' alt='HTML tutorial' />
      </a>
      <div>
        <p className='title'>Dev-Duel</p>

        <p className='info'>
          A full stack app with the functionality of inspecting a GitHub user and a duel feature with two users. This app aggregates, transforms, and displays users data and battles the two based on their data and custom made titles. The server was made with NodeJS and an API using Express. The Client was made with JavaScript, JQuery, HTML, and CSS.
        </p>
      </div>
    </div>
    <div className='proj2'>
      <a
        target='_blank'
        href='https://github.com/cooksystemsinc/js-assignment-quizler-donlord'
      >
        <img src='./src/Assets/thequizler.gif' alt='HTML tutorial' />
      </a>
      <div>
        <p className='title'>Quizler</p>

        <p className='info'>
          Created a command line app that makes custom quizzes and allows the user to take the created quizzes. Developed with JavaScript, inquirer.js and vorpal.js.

        </p>
      </div>
    </div>
    <div className='proj3'>
      <a
        target='_blank'
        href='https://github.com/cooksystemsinc/java-dao-donlord'
      >
        <img src='./src/Assets/data.jpg' alt='HTML tutorial' />
      </a>
      <div>
        <p className='title'>Data Access Objects</p>

        <p className='info'>
          A personal database which holds a person, location, and interest(s). This program allows the use of CRUD, using GET and STORE features and wraps returning data into DAO's for database security. Designed with Java and PostgreSQL
        </p>
      </div>
    </div>
  </div>
)
export default Portfolio
