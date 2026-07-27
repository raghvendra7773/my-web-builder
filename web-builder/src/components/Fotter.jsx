import React from 'react'
import './fotter.css'

const Fotter = () => {
  return (
    <footer>
      <blockquote>
        "Transforming Ideas Into Powerful Digital Experiences."
      </blockquote>

      <hr />

      <div className="footer-links">
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3>Our Services</h3>
          <ul>
            <li>Website Development</li>
            <li>React Development</li>
            <li>Django Development</li>
            <li>E-Commerce Solutions</li>
            <li>Website Maintenance</li>
          </ul>
        </div>

        <div>
          <h3>Contact Information</h3>
          <p>Email: webbuilder465@gmail.com</p>
          <p>Location: Udaipur, Rajasthan, India</p>
        </div>

        <div>
          <h3>Follow Us</h3>
          <ul>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      <hr />

      <p>© 2026 Web-Builder. All Rights Reserved.</p>
    </footer>
  )
}

export default Fotter