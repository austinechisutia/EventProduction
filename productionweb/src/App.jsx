import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './hero.jsx'
import About from './components/about.jsx'


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <About />

      <main className="p-8">
        
      </main>
    </div>
  );
}

export default App

