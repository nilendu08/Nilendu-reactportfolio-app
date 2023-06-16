import React from 'react'
import './Contact.css'
import {GoMail} from 'react-icons/go'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oecifpm', 'template_mhxv9fb', form.current, 'iwZLt0f6fH-jwkWRl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>
       Get In Touch 
      </h5>
      <h2>
        Contact Me
      </h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <GoMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>nilendu.sen.agt@gmail.com</h5>
            <a href='mailto:nilendu.sen.agt@gmail.com'target='_blank'>Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Nilendu Sen</h5>
            <a href='https://www.facebook.com/nilendu.sen'target='_blank'>Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-9774191079</h5>
            <a href='http://api.whatsapp.com/send?phone=+91-9774191079'target='_blank'>Send a message</a>
          </article>

        </div>
 
      {/* End of contact options */}


        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your full Name'required />
        <input type="email" name='email' placeholder='Your Email'required />
        <textarea name="message"  rows="7" placeholder='Your Message'required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact