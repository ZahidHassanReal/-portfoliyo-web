/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './nav.css'
import  {AiOutlineHome} from 'react-icons/ai'
import  {FaUserAlt} from 'react-icons/fa'
import  {MdWork} from 'react-icons/md'
import  {TiMessages} from 'react-icons/ti'
import {useState} from 'react'



const nav = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeNav, setActiveNav] = useState('#')
  return (
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#'  ? 'active' : '' }><AiOutlineHome/></a> 
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'  ? 'active' : '' } >
          <FaUserAlt/></a> 
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'  ? 'active' : '' }><MdWork/></a> 
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'  ? 'active' : '' }><TiMessages/></a> 
      </nav>
    
  )
}


export default nav