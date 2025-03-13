import { useState } from 'react'
import './App.css'

import Navbar from './navbar/Navbar';
import Container from './pages/home/Home';
import FooterContainer from './footer/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <Container/>
      <FooterContainer />
    </>
  )
}

export default App
