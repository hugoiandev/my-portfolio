import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </Switch>
  )
}

export default Routes
