import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'

import Navbar from './navbar/Navbar';
import Home from './pages/home/Home';
import FooterContainer from './footer/Footer';
import InstallationGuide from './pages/installation-guide/Installation_guide';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/installation-guide" element={<InstallationGuide />} />
      </Routes>
      <FooterContainer />
    </Router>
  )
}

export default App
