import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import './Projects.css'

const Projects = props => (
  <div id='projectWrapper'>
    <div className='title'>
      Projects
    </div>
    <div className='projects'>
      <div className='left' />
      <div className='right'>
        <span className='work'>Dev-Duel</span>
        <div>
          <span className='info'>
            A full stack app with the functionality of inspecting a GitHub user and a duel feature with two users. This app aggregates, transforms, and displays users data and battles the two based on their data and custom made titles. The server was made with NodeJS and an API using Express. The Client was made with JavaScript, JQuery, HTML, and CSS.
          </span>
          <span>
            <a
              target='_blank'
              href='https://github.com/cooksystemsinc/js-assessment-dev-duel-donlord'
            >
              <img
                className='img'
                src='./src/Assets/github.png'
                alt='github logo'
              />
            </a>
          </span>
        </div>

      </div>
    </div>

    <div className='title' />
    <div className='projects'>
      <div className='left' />
      <div className='right'>
        <span className='work'>Quizler</span>
        <div>
          <span className='info'>
            Created a command line app that makes custom quizzes and allows the user to take the created quizzes. Developed with JavaScript, inquirer.js and vorpal.js.

          </span>
          <span>
            <a
              target='_blank'
              href='https://github.com/cooksystemsinc/js-assessment-dev-duel-donlord'
            >
              <img
                className='img'
                src='./src/Assets/github.png'
                alt='github logo'
              />
            </a>
          </span>
        </div>

      </div>
    </div>

    <div className='title' />
    <div className='projects'>
      <div className='left' />
      <div className='right'>
        <span className='work'>Data Access Objects</span>
        <div>
          <span className='info'>
            A personal database which holds a person, location, and interest(s). This program allows the use of CRUD, using GET and STORE features and wraps returning data into DAO's for database security. Designed with Java and PostgreSQL
          </span>
          <span>
            <a
              target='_blank'
              href='https://github.com/cooksystemsinc/java-dao-donlord'
            >
              <img
                className='img'
                src='./src/Assets/github.png'
                alt='github logo'
              />
            </a>
          </span>
        </div>

      </div>
    </div>

  </div>
)
export default Projects
