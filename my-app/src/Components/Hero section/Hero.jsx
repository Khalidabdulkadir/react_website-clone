import React from 'react'
import logo from "../../logo.svg"
import "./hero.css"
const Hero = () => {
  return (
    <div className='Hero-container'>
        <div className="img-logo">
        <img src={logo}/>
        </div>
        <div className="hero-text">
            <h1>React</h1>
            <p>The library for web and native user interfaces</p>
        </div>
        <div className="Hero-Btns">
            <button className='left-btn'>Learn React</button>
            <button className='right-btn'>API Reference</button>
        </div>
    </div>
  )
}

export default Hero
