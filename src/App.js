import React from 'react'
import './index.css'
import Header from './components/header/Header.jsx'
import Main from './components/main/Main.jsx'
import Container from "react-bootstrap/Container"


function App() {
  return (
  <>
    <Container>
      <Header />
      <Main />
    </Container>
  </>
  )
}

export default App
