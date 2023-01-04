import React from 'react'
import './about.css'
import ME from '../../picture/p2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'





 const About = () => {
  return (
    <section id='about'>
      <h5>Get TO kNOW</h5>
      <h2>About Me</h2>


      <div className= 'container about__container' >
        <div className='about__me' >
        <div className= 'about__me-image'  >
          <img src={ME} alt="About Image" /> 
          </div> 
        </div>


        <div className='about__content' >
          <div className='about__cards' >
            <article className='about__card' >
              <FaAward className='about__icon' />   
              <h5>Experience</h5>
              <small>1 Years</small>
            </article>
            <article className='about__card' >
              <FaUsers className='about__icon' />   
              <h5>Clients</h5>
              <small>1 Clients</small>
            </article>
            <article className='about__card' >
              <AiOutlineFundProjectionScreen className='about__icon' />   
              <h5>Projects</h5>
              <small>4 Completed</small>
            </article>
          </div>

          <p>
         <h3>Hey, I'm Zahid.</h3> 
Web designer and developer from Dhaka, Bangladesh.I create custom websites to help businesses do better online. I love spending time on fixing little details and optimizing web apps.
I'm passionate about Full stack developing and having an experience of building website with Javascript/ Nodejs/ Reactjs/ React Native and some other powerful libraries and frameworks.
      </p>

        <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
        </div>

    </section>
  )
}

export default About