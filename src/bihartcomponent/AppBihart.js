import React from 'react'
import "./appBihart.css"
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import About from './about/About'
import Collection from './collections/Collection'
import Footer from './footer/Footer'

const AppBihart = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Collection/>
      <Footer/>
    </div>
  )
}

export default AppBihart
