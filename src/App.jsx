import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Figlet from './components/Figlet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <nav className="bg-slate-900 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-8">
              <Link to="/" className="text-white hover:text-blue-400 font-medium transition-colors duration-200">Home</Link>
              <Link to="/figlet" className="text-white hover:text-blue-400 font-medium transition-colors duration-200">Figlet _-_-_</Link>
              <Link to="/contact" className="text-white hover:text-blue-400 font-medium transition-colors duration-200">Contact</Link>
            </div>
          </div> 
        </div>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/figlet" element={<Figlet />} />
      </Routes> 
    </BrowserRouter>

    </>
  )
}

export default App
