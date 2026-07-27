import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  // Close the drawer automatically if the viewport grows back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock page scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <nav>
        {/* <button
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button> */}

        <div className={`nav-links ${open ? 'open' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          {/* <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink> */}
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </div>
      </nav>

      <div
        className={`nav-overlay ${open ? 'open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  )
}

export default Navbar