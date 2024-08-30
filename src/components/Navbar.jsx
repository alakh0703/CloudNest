import React from 'react';
import Logo from '../assets/images/Logo2.png'
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar-main' >
      <div className='navbar-container'>

      <div className='navbar-logo-container'>
        <img src={Logo} alt='Logo' className='navbar-logo' />
        </div>
        <div className='navbar-links'>
          <div className='navbar-link'>
              <a href='#' className='navbar-link'>Home</a>

          </div>
     
          <div className='navbar-link'>
              <a href='#' className='navbar-link'>Opportunities</a>

          </div>
          <div className='navbar-link'>
              <a href='#' className='navbar-link'>About Us</a>

          </div>
          <div className='navbar-link'>
              <a href='#' className='navbar-link'>Contact</a>

          </div>
          <div className='navbar-link'>
              <a href='#' className='navbar-link'>Login</a>

          </div>
          <div className='navbar-link'>
              <a href='#' className='navbar-link'>Register</a>

          </div>
          </div>
          <div className='navbar-button'>
            <button className='navbar-button2'>REGISTER NOW</button>
            </div>
      </div>
    
    </div>
  )
}

export default Navbar