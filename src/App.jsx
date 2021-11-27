import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import Header from './Components/Header'
import Container from './Components/Container'
import Technologies from './Components/Technologies'
import Footer from './Components/Footer'

const App = () => {
  
  return (
    <div className="App">
      <Router>
        <Header />
        <Container>
          <Routes />
        </Container>
        <Technologies />
        <Footer />
      </Router>
    </div>
  )
}

export default App
