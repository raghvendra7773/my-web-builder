import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
// import Conatct from './pages/Contact' 
import Contact from './pages/Contact'
import Services from './pages/Services'
import Projects from './pages/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <BrowserRouter>
     
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
