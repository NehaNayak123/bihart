import React from 'react'
import "./aboutStyles.css";
import img from "./sadhnaimg.webp"
const About = () => {
  return (
    <div className='about-container'>
        <div className='about-left'>
          <img className='about-left-img' src={img} alt='img' />
        </div>
        <div className='about-right'>
          <h1 className='about-right-head'>About Bihart</h1>
          <hr className='hr'/>
          <br/>
          <br/>
          <p className='about-right-p'>Sumati, an aesthete, born in Patna, grew up in her family-owned in-house museum and was surrounded by antiques and artefacts. As she wandered across the globe the notion of luxury to her transformed into things that were beautifully crafted and made to last. </p>
          <br/>
          <br/>
          <p className='about-right-p'>Being a design and apparel brand in today's time is as challenging as is rewarding. People across India have become conscious of what they are consuming and demand a certain level of ethics from the brands they choose to love.</p>
          <br/>
          <br/>
          <button className='about-right-btn'>Read More</button>
        </div>
    </div>
  )
}

export default About
