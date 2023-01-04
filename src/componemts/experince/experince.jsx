import React from 'react' 
import './experince.css'
import {BsCheck2Circle} from 'react-icons/bs'
import {BsStarFill} from 'react-icons/bs'
import {BsStarHalf} from 'react-icons/bs'


 const experince = () => {
  return (
    <section id='experience'>
      <h5>What skills I Have</h5>
      <h2>My Experience</h2>


      <div className='container experience__container' >
        <div className='experience__frontend'>
          <h3> Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <  BsCheck2Circle className='experience__details-icon'/>
           
            <div>
             <h4>HTML</h4>
             <small className='text-light'><BsStarFill/><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></small>
            </div>
            </article>
            <article className='experience__details'>
            < BsCheck2Circle className='experience__details-icon'/>
           <div>
            <h4>CSS </h4>
            <small className='text-light'><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></small>
           </div>
            </article>
            <article className='experience__details'>
            < BsCheck2Circle className='experience__details-icon'/>
            <div>
             <h4>JavaScript</h4>
             <small className='text-light'><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></small>
            </div>
            </article>
            <article className='experience__details'>
            < BsCheck2Circle className='experience__details-icon'/>
            <div>
             <h4>BootStrap</h4>
             <small className='text-light'><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></small>
            </div>
            </article>
            <article className='experience__details'>
            < BsCheck2Circle className='experience__details-icon'/>
            <div>
             <h4>Tailwind</h4>
             <small className='text-light'><BsStarFill/><BsStarFill/></small>
            </div>
            </article>
            <article className='experience__details'>
            < BsCheck2Circle className='experience__details-icon'/>
            <div>
             <h4>React</h4>
             <small className='text-light'><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></small>
            </div>
            </article>
          </div>
          </div> 

                    


          <div className='experience__backend'>
          <h3> Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            < BsCheck2Circle className='experience__details-icon'/>
           <div>
            <h4> Node JS </h4>
            <small className='text-light'><BsStarFill/><BsStarFill /><BsStarFill /><BsStarFill /></small>
           </div>
            </article>
            <article className='experience__details'>
            < BsCheck2Circle className='experience__details-icon'/>
            <div>
             <h4> MongoDB </h4>
             <small className='text-light'><BsStarFill/><BsStarFill/><BsStarFill/><BsStarFill/></small>
            </div>
            </article>
            <article className='experience__details'>
            < BsCheck2Circle className='experience__details-icon'/>
            <div>
             <h4>PHP</h4>
             <small className='text-light'><BsStarFill/><BsStarFill/><BsStarFill/></small>
            </div>
            </article>
            <article className='experience__details'>
            < BsCheck2Circle className='experience__details-icon'/>
           <div>
            <h4>MySQL</h4>
            <small className='text-light'><BsStarFill/><BsStarFill/><BsStarFill/><BsStarHalf/></small>
           </div>
            </article>
            <article className='experience__details'>
            <  BsCheck2Circle className='experience__details-icon'/>
            <div>
             <h4>Laravel</h4>
             <small className='text-light'><BsStarFill/><BsStarFill/></small>
            </div>
            </article>
            <article className='experience__details'>
            <  BsCheck2Circle className='experience__details-icon'/>
           <div>
            <h4>Express js</h4>
            <small className='text-light'><BsStarFill/><BsStarFill/><BsStarFill/></small>
           </div>
            </article>
           </div>
          </div>

      </div>


    </section>
  )
}

export default experince