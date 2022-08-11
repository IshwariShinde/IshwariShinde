import React, { useEffect } from 'react'
import About from './About'
import Contact from './Contact'
import './CSS/App.css'
import Header from './Header'
import HeroSection from './HeroSection'
import Projects from './Projects'
import Skills from './Skills'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AiOutlineLinkedin } from 'react-icons/ai'
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(()=>{
    Aos.init({duration:3000});
  }, []);
  return (
    <div className='App-component'>
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <BrowserRouter>
      <Routes>
        <Route path='https://www.linkedin.com/in/ishwari-shinde-984a26209/' element={<AiOutlineLinkedin/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
