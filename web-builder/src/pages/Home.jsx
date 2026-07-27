// 

import React from 'react'
import Fotter from '../components/Fotter'
import './home.css'

const services = [
  'Responsive Websites',
  'E-Commerce Solutions',
  'Business Websites',
  'Portfolio Websites',
  'Web Applications',
  'SEO Optimized Websites',
]

const Home = () => {
  return (
    <div className="home-page">

      <h1>Build Your Digital Future With Web-Builder</h1>

      <p>
        We create modern, responsive, and high-performance websites that help
        businesses grow, attract customers, and establish a strong online presence.
      </p>

      <h2>Transforming Ideas Into Powerful Digital Experiences</h2>

      <p>
        From stunning business websites to custom web applications, we deliver
        innovative digital solutions designed to elevate your brand and drive
        success.
      </p>

      <h2>Our Promise</h2>

      <p>
        Fast Performance • Modern Design • Mobile Responsive • SEO Friendly •
        Secure & Scalable
      </p>

      <h2>Trusted by Businesses, Built for Growth</h2>

      <p>
        We help startups, entrepreneurs, and organizations create websites that
        leave lasting impressions and generate real results.
      </p>

      <blockquote>
        "Your Vision. Our Expertise. One Exceptional Website."
      </blockquote>

      <div className="slider">
        <ul className="slider-track">
          {[...services, ...services].map((item, i) => (
            <li className="slider-card" key={`${item}-${i}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Fotter />
    </div>
  )
}

export default Home