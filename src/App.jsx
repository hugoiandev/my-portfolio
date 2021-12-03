import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import Header from './Components/Header'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
  )
}

export default App
