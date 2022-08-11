import React from 'react'
import './CSS/contact.css'
import { AiOutlineMail } from "react-icons/ai";
import {AiOutlineLinkedin } from "react-icons/ai";
import {AiOutlineTwitter } from "react-icons/ai";
import {AiOutlineYoutube } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dlotn2p', 'template_ztmsnkc', form.current, '-nwJz97odnZmELWA0')
   .then(
    ()=>{
      alert('Message sent successfully!')
    },
    ()=>{
      alert('Failed to send message, please try again')
    }
   )
    e.target.reset()
    
  };
  return (
    <div className='contact' id='contact'  data-aos="fade-up">
        <h2>Contact Me</h2>
        <div className='contactWrapper'>
        <div className='contactInfo'>
            <h3>Contact Info</h3>
            <div className='conatct_details'>
              <AiOutlineMail className='mail_icon'/>
              <h4 id='contact_mail'>ishwarishinde217@gmail.com</h4>
            
            </div>
            <div className='social_icons'>
             <a href='https://www.linkedin.com/in/ishwari-shinde-984a26209/' target='blank'><AiOutlineLinkedin className='contact_icon'/> </a>
             
              <a href='https://twitter.com/Isha_217' target='blank'><AiOutlineTwitter className='contact_icon' /></a>
              <a href='https://www.youtube.com/channel/UCFiSeDAQfbpWMJ1lH2MLLQA' target='blank'><AiOutlineYoutube className='contact_icon' /></a>
              <a href='https://github.com/IshwariShinde' target='blank'><BsGithub className='contact_icon' /></a>
            </div>
        </div>
        <div className='contactForm'>
        <form  ref={form} onSubmit={sendEmail}>
            <div className='input_box'> 
            <input type='text' placeholder='Name' required name='name'/>
            <input type='email' placeholder='Email' required name='email' />
            </div>
           <div className='msg_box'>
           <textarea placeholder='Message' required name='message'/>
           </div>
           <div className='send_btn'> <input type='submit' value='Send Message' />
           </div>
           
            
        </form>


        </div>
        </div>
        
        
    </div>
  )
}

export default Contact