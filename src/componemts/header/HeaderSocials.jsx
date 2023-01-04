import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub}  from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://instagram.com/hassan.zahid.real" target="_blank"><BsInstagram/></a>
        <a href="https://github.com/" target="_blank" ><BsGithub/></a>
        <a href="https://www.linkedin.com/in/md-zahid-hassan-2a8a521bb/" target="_blank" ><BsLinkedin/></a>
        <a href="https://www.facebook.com/real.zahidhassan" target="_blank" ><BsFacebook/></a>

    </div>
  )
}

export default HeaderSocials
