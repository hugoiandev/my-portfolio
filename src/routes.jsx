import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Project'
import About from './Pages/About'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/projects' component={Projects} />
      <Route path='/about' component={About} />
    </Switch>
  )
}

export default Routes
