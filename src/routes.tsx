import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Projects from './Pages/Project'
import About from './Pages/About'
import Contact from './Pages/Contact'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/projects' component={Projects} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
    </Switch>
  )
}

export default Routes
