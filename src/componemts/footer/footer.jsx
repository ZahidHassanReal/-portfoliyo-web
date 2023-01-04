import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FiInstagram} from 'react-icons/fi'

const footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Zahid Hassan Real</a>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='footer__socials'>
            <a href="https://www.facebook.com/real.zahidhassan"><FaFacebookF/></a>
            <a href="https://twitter.com/fef52662c5c0425"><IoLogoTwitter/></a>
            <a href="https://www.instagram.com/hassan.zahid.real"><FiInstagram/></a>

        </div>

        <div className='footer__copyright'>
            <small>&copy; Zahid Hassan . @2023 All rights reserved </small>
        </div>
    </footer>
  )
}
export default footer