import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../picture/p1.png'
import HeaderSocial from './HeaderSocials'
  


 const header = () => {
  return (
    <header>
      <div className="container header__container">
         <h5>Hello I'm </h5>
        <h1>MD.Zahid Hassan</h1>
      <h5 className="text-light">Fullstack web Developer </h5>
      <CTA/>
      <HeaderSocial/>
      <div className='me'>
       <img src={ME} alt="me" />
       </div>
        </div>
        
    </header>
  )
}

export default header  