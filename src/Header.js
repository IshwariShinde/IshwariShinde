import React from 'react'
import './CSS/header.css'

const Header = () => {
  function burger() {
    let burger = document.querySelector('.burger')
     let header = document.querySelector('.header')
     let  navbarItems= document.querySelector('.navbar-items')


     burger.addEventListener('click', () => {
         navbarItems.classList.toggle('navlist-visibility');
         header.classList.toggle('header-resp');
     })}
  return(
    <div className='header header-resp'  onClick={burger}>
        <ul className='navbar-items navlist-visibility'>
            <li><a href='#herosection'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#contact'>Contact</a></li>
           
           
        </ul>
        <div className="burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
    </div>
  )
}

export default Header