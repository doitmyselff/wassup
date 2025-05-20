import React from 'react'
import './Hero.css'
import dark from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1> We ensure a better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education</p>
        
        {/* Use Link to smoothly scroll to 'about' section */}
        <Link to="about" smooth={true} offset={-150} duration={500}>
          <button className='btn'>
            Explore more <img src={dark} alt=""/>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero;

