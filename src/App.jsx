import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import Header from './Components/Header'
import Footer from './Components/Footer'
import MousePointer from './Components/MousePointer'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
        <Footer />
        <MousePointer />
      </Router>
    </div>
  )
}

export default App
