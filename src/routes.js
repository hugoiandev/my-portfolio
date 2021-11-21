import React from 'react'
import { BrowserRouter as Router,
Route,
Switch
} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default Routes
