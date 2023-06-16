import React from 'react'
import './About.css'
import ME from '../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'

function About() {
  return (
    <section id='about' >
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="conatiner about_container">
        <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt='About Image'/>
        </div>
        </div>

        <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
          <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small>1+ years Working</small>
          </article>

          <article className='about_card'>
          <AiFillFolderOpen className='about_icon'/>
          <h5>Projects</h5>
          <small>5+ completed</small>
          </article>

          
        </div>

        <p>
        In search of an opportunity to work in a fun and challenging working environment where I can enhance my skills. I am also a highly organized and dedicated individual, with a proven ability to improve working environments and a commitment to employee welfare. Qualified Software Developer with extensive background in advanced management processes. Utilises superior communication skills to build meaningful, trusting relationships that exceed client demands. Highly skilled project manager with outstanding team leadership abilities to meet targets consistently.
        </p>
        {/* <a href='#contact'className='btn btn-primary'>Lets Talk</a> */}
        </div>
        </div>     
    </section >
  )
}

export default About