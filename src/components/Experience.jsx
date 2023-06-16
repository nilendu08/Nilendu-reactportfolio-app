import React from 'react'
import './Experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
         <h3>Frontend Development</h3> 
         <div className="experience_content">
          <article className='experience_details'>
          <HiBadgeCheck className='experience_details-icon' />
         <div>
         <h4>HTML</h4>
          <small className='text_light'>
            Experienced
          </small>
         </div>
          </article>

          <article className='experience_details'>
          <HiBadgeCheck className='experience_details-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text_light'>
            Intermediate
          </small>
          </div>
          </article>

          <article className='experience_details'>
          <HiBadgeCheck className='experience_details-icon'/>
          <div>
          <h4>Angular JS</h4>
          <small className='text_light'>
            Intermediate
          </small>
          </div>
          </article>

          <article className='experience_details'>
          <HiBadgeCheck className='experience_details-icon'/>
         <div>
         <h4>React JS</h4>
          <small className='text_light'>
            Intermediate
          </small>
         </div>
          </article>

          <article className='experience_details'>
          <HiBadgeCheck className='experience_details-icon'/>
          <div>
          <h4>Power Apps</h4>
          <small className='text_light'>
            Experienced
          </small>
          </div>
          </article>

          <article className='experience_details'>
          <HiBadgeCheck className='experience_details-icon'/>
          <div>
          <h4>Javascript</h4>
          <small className='text_light'>
            Experienced
          </small>
          </div>
          </article>

         </div>
        </div>
      

    {/* END OF FRONTEND DEV */}

      <div className="experience_backend">
         <h3>Backend Development</h3> 
         <div className="experience_content">
          <article className='experience_details'>
          <HiBadgeCheck className='experience_details-icon'/>
          <div>
          <h4>Node JS</h4>
          <small className='text_light'>
            Intermediate
          </small>
          </div>
          </article>

          <article className='experience_details'>
          <HiBadgeCheck className='experience_details-icon'/>
         <div>
         <h4>Firebase</h4>
          <small className='text_light'>
            Intermediate
          </small>
         </div>
          </article>

          <article className='experience_details'>
          <HiBadgeCheck className='experience_details-icon'/>
         <div>
         <h4>Java</h4>
          <small className='text_light'>
            Intermediate
          </small>
         </div>
          </article>

          <article className='experience_details'>
          <HiBadgeCheck className='experience_details-icon' />
          <div>
          <h4>MySQL</h4>
          <small className='text_light'>
            Basic
          </small>
          </div>
          </article>


         </div>
        </div>
        </div>
    </section>
  )
}

export default Experience