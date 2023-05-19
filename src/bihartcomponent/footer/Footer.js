import React from 'react'
import "./footerStyles.css"
import {BsFacebook, BsPinterest, BsInstagram} from "react-icons/bs"
import {FaTiktok} from "react-icons/fa"
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-upper'>
            <div className='footer-upper-left'>
                <div className='footer-upper-left-l'>
                    <p><a href='#'>About Us</a></p>
                    <p><a href='#'> FAQs</a></p>
                    <p><a href='#'> Careers</a></p>
                    <p><a href='#'>Accepted Payments</a></p>
                    <p><a href='#'>Upcoming Events</a></p>
                </div>
                <div className='footer-upper-left-r'>
                    <p><a href='#'>Shipping & Delivery</a></p>
                    <p><a href='#'>Return & Exchange</a></p>
                    <p><a href='#'>Privacy Policy</a></p>
                    <p><a href='#'>Terms & Conditions</a></p>
                    <p><a href='#'>Disclaimer</a></p>
                    <p><a href='#'>terms of Services</a></p>
                </div>
            </div>
            <div className='footer-upper-right'>
                <p className='footer-upper-right-p'>Contact Us</p>
                <div className='footer-upper-right-input-container'>
                    <input className='input' placeholder='Your Email'/>
                    <button className='footer-upper-right-input-container-btn'>Subscribe</button>
                    {/* <hr/> */}
                </div>
                <div className='footer-upper-right-social-icons'>
                    <BsFacebook className='footer-upper-right-icon'/>
                    <BsPinterest className='footer-upper-right-icon'/>
                    <BsInstagram className='footer-upper-right-icon'/>
                    <FaTiktok className='footer-upper-right-icon'/>
                </div>
            </div>
        </div>


        <div className='footer-lower'>
            <p>Be a part of BIHART's Cultural Journey</p>
            <p>© 2023 Bihart. All Rights Reserved </p>
        </div>
    </div>
  )
}

export default Footer
