import React from 'react'
import './portfolio.css'
import  IMG1 from '../../picture/about-img.png'
import PIC1 from '../../picture/PIC.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
        <h5> My Recent Work</h5> 
        <h2>Portfolio</h2>


        <div className='container portfolio__container'  >
            <article className='portfolio__item' >
                <div className='portfolio__item-image' >
                <img src={IMG1} alt="ABOUT" />
                </div>
                <h3>E-commerce site using HTML, CSS & Javascript</h3>
                <div className='portfolio__item-cta'>
                 <a href="https://github.com/ZahidHassanReal/ZahidHassanReal-Medicare.github.io" className='btn' target='_blank'>Github</a>
                 <a href="https://zahidhassanreal.github.io/ZahidHassanReal-Medicare.github.io/" className='btn btn-primary' target='_blank'> Live Demo</a>
                </div>

            </article>
 <article className='portfolio__item' >
                <div className='portfolio__item-image' >
                <img src={PIC1} alt="ABOUT" />
                </div>
                <h1>Fullstack MERN App </h1>
                <h3>E-commerce site using MongoDB, Express, React, Node. A Compleate MERN Stack Project . </h3>
                <div className='portfolio__item-cta'>
                 <a href="https://github.com/ZahidHassanReal/" className='btn' target='_blank'>Github</a>
                 <a href="https://medi-carestore.netlify.app/" className='btn btn-primary' target='_blank'> Live Demo</a>
                </div>

            </article>

        </div>
    </section>
  )
}

export default portfolio