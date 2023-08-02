import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import UnderDevelopment from './views/under-development'
import ProjectsWorkings from './views/projects-workings'
import Home from './views/home'
import Buddies from './views/buddies'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={UnderDevelopment} exact path="/under-development" />
        <Route component={ProjectsWorkings} exact path="/projects-workings" />
        <Route component={Home} exact path="/" />
        <Route component={Buddies} exact path="/buddies" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
