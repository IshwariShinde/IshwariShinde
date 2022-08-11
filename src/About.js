import React from 'react'
import './CSS/about.css'
import Aboutimg from './Assets/imgabt2.png'




const About = () => {

  return (
    <div className='aboutme' id='about'  >
        <h2>About Me</h2>
        <div className='about_wrapper'>
        <div className='imgabout'>
          <img src={Aboutimg} alt="left-img" className='img_abt' />
         
          </div>
        <div className='about_content '>
          <p >
          Hello! Welcome To My Portfolio.<br />I'm a frontend developer. At present i'm a final year engineering student pursuing BE-IT who loves to code and design beautiful websites. I develop interactive websites using React.js.
          I can provide clean code and also make responsive websites.
          <div><a href='#contact' className='about_btn'>Let's Connect</a></div>

        </p>

        </div></div>
        
    </div>
  )
}

export default About