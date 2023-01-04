import React from 'react'
import CV from '../../picture/Zahid Hassan_CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Lat's Talk </a>

    </div>
  )
}
export default CTA