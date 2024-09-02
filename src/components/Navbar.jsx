import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/Logo2.png'
import "./styles/Navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`navbar-main ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className='navbar-container'>

      <div className='navbar-logo-container'>
        <img src={Logo} alt='Logo' className='navbar-logo' />
        </div>
        <div className='navbar-links'>
          <div className='navbar-link'>
          <p className='navbar-link'>Home</p>

          </div>
     
          <div className='navbar-link'>
          <p className='navbar-link'>Opportunities <span className='navbar-gt'>&gt;</span></p>


          </div>
          <div className='navbar-link'>
          <p className='navbar-link'>About</p>

          </div>
          <div className='navbar-link'>
          <p className='navbar-link'>Contact</p>

          </div>
          <div className='navbar-link'>
          <p className='navbar-link'>Login</p>

          </div>
          <div className='navbar-link'>
              <p className='navbar-link'>Register</p>

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