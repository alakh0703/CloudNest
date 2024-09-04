import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/Logo2.png'
import "./styles/Navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const go2Location = (location) => {
    window.location.href = location;
  }
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
            
          <p className='navbar-link' onClick={()=>go2Location("/")}>Home</p>

          </div>
     
          <div className='navbar-link navbar-link-drop'>
          <p className='navbar-link'>Opportunities <span className='navbar-gt'>&gt;</span></p>
          <div className='navbar-dropdown'>
  <div className='navbar-dropdown-link' onClick={()=>go2Location("/dc-cloud")}>DC & Cloud</div>
  <div className='navbar-dropdown-link' onClick={()=>go2Location("/cloud-infra")}>Cloud Infrastructure</div>
  <div className='navbar-dropdown-link' onClick={()=>go2Location("/medc")}>Micro & Edge Data Center</div>
  </div>


          </div>
          <div className='navbar-link' onClick={()=>go2Location("/about")}>
          <p className='navbar-link'>About</p>

          </div>
          <div className='navbar-link' onClick={()=>go2Location("/contact")}>
          <p className='navbar-link'>Contact</p>

          </div>
          <div className='navbar-link' onClick={()=>go2Location("/login")}>
          <p className='navbar-link'>Login</p>

          </div>
          <div className='navbar-link' onClick={()=>go2Location("/register")}>
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