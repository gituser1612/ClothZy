import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>ClothZy</h1>
         <div className="hero-content-tagline">
        <p>Unfold your Style</p><button>Shop Now</button>
      </div>
      </div>
    </section>
  )
}

export default Hero