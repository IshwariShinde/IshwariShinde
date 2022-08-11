import React from 'react'
import './CSS/herosection.css'
import Mainimg from './Assets/isha.jpg';
import Resume from './Assets/resume.pdf';
import Triangle from './Assets/triangle.png'
// import { GrReactjs } from "react-icons/gr";
// import { AiOutlineHtml5 } from "react-icons/ai";
// import { TbBrandCss3 } from "react-icons/tb";
// import { TbBrandJavascript } from "react-icons/tb";
// import { FaNodeJs } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";

const HeroSection = () => {
  return (
    <div className='herosection common'>
      <div className='shape'>
        <img src={Triangle} alt='shape' className='shape1' />
        <img src={Triangle} alt='shape' className='shape2' />
        <img src={Triangle} alt='shape' className='shape3' />
        <img src={Triangle} alt='shape' className='shape4' />
        <img src={Triangle} alt='shape' className='shape5' />
      </div>
      <div className='herosection_inner'>
        <div className='left-content animate__animated animate__jackInTheBox' id='herosection'>
            <p>Hi,
            <br /><span className='edit-text' ><span>I'm </span><span className='color-text' >Ishwari</span></span><br />
            I'm a <span className='color-text'>front-end</span> developer.<br /> I design & code simple yet beautiful<br /> responsive websites.
            </p>
           <a href={Resume} target='blank' download> <button className='cv-btn'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              ⇩ CV ⇩
              </button></a>
        </div>
        <div className='right-content animate__animated animate__fadeInRight animate__delay-1s'>
            <img className='main-img' src={Mainimg} alt='main-img'/>

        </div>
        </div>
    </div>
  )
}

export default HeroSection