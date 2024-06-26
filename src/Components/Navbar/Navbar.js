import React, { useEffect } from 'react'
import './Navbar.css'
import logo1 from '../../Assets/logo1.webp'
import { useState } from 'react'
import {Link} from 'react-scroll';
import menuicon from '../../Assets/menu-icon.png'


const Navbar = () => {
  let[sticky,setSticky]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50? setSticky(true):setSticky(false)
    })
  })
  const[mobilemenu,SetMobileMenu]=useState(false)
  const togglemenu=()=>{

    mobilemenu ?SetMobileMenu(false):SetMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
        <img src={logo1} alt='' className='logo'/>
        <ul className={mobilemenu?"":"hide-mobile-menu"}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About US</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={-260} duration={500}>Contact us</Link></li>
        </ul>
        <img src={menuicon} className='menu-icon'onClick={togglemenu}/>
    </nav>
  )
}

export default Navbar