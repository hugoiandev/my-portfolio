import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import Header from './Components/Header'
import Footer from './Components/Footer'
import MousePointer from './Components/MousePointer'
import Wrapper from './Components/Wrapper'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Header />
          <Routes />
          <Footer />
          <MousePointer />
        </Wrapper>
      </Router>
    </div>
  )
}

export default App
