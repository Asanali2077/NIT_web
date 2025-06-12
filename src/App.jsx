import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import OpenSourceTools from './components/OpenSourceTools'
import OurDevelopments from './components/OurDevelopments'
import Features from './components/Features'
import Achievements from './components/Achievements'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <OurDevelopments />
      <OpenSourceTools />
      <Achievements />
      <Footer />
    </div>
  )
}

export default App 