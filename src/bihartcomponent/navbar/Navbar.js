import React, { useState } from 'react'
import "./navbarStyles.css"
import {TfiEmail} from "react-icons/tfi"
import {BsSearchHeart} from "react-icons/bs"
import {ImProfile} from "react-icons/im"
import {AiFillHeart} from "react-icons/ai"
import {FiShoppingCart} from "react-icons/fi"
import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io"

const Navbar = () => {
// 
const [showSelectPropertType, setShowSelectPropertType]=useState(false)
const mystyle={
  position: "absolute",
  top: "100%",
  backgroundColor: "#fff",
  left: "0",
  // width: "320px",
  width: "170px",
  zIndex: "2",
  // border: "1px solid rgba(0, 0, 0, 0.04)",
  // color: "red",
}

// 


  return (
    <div className='navbar-container'>
      <div className='nav-left'>
        {/* <div>
            <BsSearchHeart className='icon'/>
        </div> */}
        <BsSearchHeart className='icon'/>
        <TfiEmail className='icon'/>
      </div>
      <div className='nav-mid'>
        <a href='/'><span onClick={()=>setShowSelectPropertType(!showSelectPropertType)}>SHOP<IoIosArrowDown className='shop-down-arrow'/></span>
        {
                    showSelectPropertType && 
                    <div className="dropdown" style={mystyle}>
                        {/* <ul className='dropdown-ul' style={{backGroundcolor: "black", 
                                    listStyle: "none",
                                    margin:"10px",
                                    padding: "10px",
                                    alignItems:"center" 
                        }}> */}

                        <ul className='dropdown-ul'>
                            <li className='dropdown-ul-li'><a href='/'>Dresses</a></li>
                            <li className='dropdown-ul-li'><a href='/'>Skirts</a></li>
                            <li className='dropdown-ul-li'><a href='/'>Pants</a></li>
                            <li className='dropdown-ul-li'><a href='/'>Accessories &nbsp;<span><IoIosArrowForward className='shop-down-arrow'/></span></a></li>
                            <li className='dropdown-ul-li'><a href='/'>Tops</a></li>
                        </ul>
                    </div>
                    }</a>


        {/* <a href='#'>SHOP ^</a> */}
        <a href='/'>BIHART</a>
        <a href='/'>ART FORMS</a>
      </div>
      <div className='nav-right'>
        <ImProfile className='icon'/>
        <AiFillHeart className='icon'/>
        <FiShoppingCart className='icon'/>
      </div>
    </div>
  )
}

export default Navbar
