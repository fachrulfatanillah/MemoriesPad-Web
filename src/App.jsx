import { useState } from 'react'
import './App.css'

import Navbar from './navbar/Navbar';
import Container from './pages/home/Home';

function App() {

  return (
    <>
      <Navbar/>
      <Container/>
    </>
  )
}

export default App
