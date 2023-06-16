import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer_logo'>NILENDU SEN</a>

      <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#about'>About</a></li>
      <li><a href='#experience'>Experience</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#contact'>Contact</a></li>
      
      </ul>

    <div className="footer_socials">
      <a href='https://www.facebook.com/nilendu.sen.98/'><BsFacebook></BsFacebook></a>
      <a href='https://www.instagram.com/'><FaInstagram/></a>
      <a href='https://www.linkedin.com/in/nilendu-sen-6b6488216/'><FaLinkedin/></a>
    </div>

    <div className="footer_copyright">
      <small>&copy; Nilendu Sen. All rights reserved.</small>
    </div>

    </footer>
  )
}

export default Footer