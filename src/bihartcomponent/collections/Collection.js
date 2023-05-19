import React from 'react'
import "./collectionStyles.css"
import img1 from "./img1.webp"
import img2 from "./img2.webp"
import img3 from "./img3.webp"
const Collection = () => {
  return (
    <div className='collection-container'>
        <h1 className='collection-head' >Our Collection</h1>
        <div className='collection-img-container'>
            <div className='collection-img-container-upper'>
                <img className='collection-img' src={img1} alt='img' />
                <img className='collection-img' src={img2} alt='img' />
                <img className='collection-img three' src={img3} alt='img' />
            </div>
            <div className='collection-img-container-lower'>
                <img className='collection-img' src={img1} alt='img' />
                <img className='collection-img' src={img2} alt='img' />
                <img className='collection-img three' src={img3} alt='img' />
            </div>
        </div>
    </div>
  )
}

export default Collection
