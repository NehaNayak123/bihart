import React from 'react'
import "./hero.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "./img1.webp"


const Hero = () => {
  return (
    <div className='hero-container'>
        <div className='hero-upper'>
            <div className='hero-upper-left'>
                <Carousel className='carousel' showIndicators={true} showThumbs={false}  showArrows={true} autoPlay={false} infiniteLoop={true} >
                    <div>
                        <img src={img1} alt='/' />
                    </div>
                    <div>                    
                        <img src={img1} alt='/' />
                    </div>
                    <div>
                        <img src={img1} alt='/' />
                    </div>
                </Carousel>
            </div>
            <div className='hero-upper-right'>
                <Carousel className='carousel' showThumbs={false} showArrows={true} autoPlay={true} infiniteLoop={true} >
                    <div>
                        <img src={img1} alt='/' />
                    </div>
                    <div>                    
                        <img src={img1} alt='/' />
                    </div>
                    <div>
                        <img src={img1} alt='/' />
                    </div>
                </Carousel>
            </div>
        </div>
        <div className='hero-lower'>
            <Carousel className='carousel' interval={"5000"} showIndicators={true} showThumbs={false}  showArrows={true} autoPlay={true} infiniteLoop={true} >
                <div>
                    <img className='hero-lower-img' src={img1} alt='/' />
                </div>
                <div>                    
                    <img className='hero-lower-img' src={img1} alt='/' />
                </div>
                <div>
                    <img className='hero-lower-img' src={img1} alt='/' />
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Hero
