import React, { useState } from 'react';
import Logo from "../assets/images/Logo.png";
import MenuBar from './MenuBar';
import './styles/FixedNav.css';

const FixedNav = () => {

  const go2Location = (location) => {
    window.location.href = location;
  }

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='fixnav-main'>
        <div className='fixnav-logodiv'>
            <img src={Logo} alt='logo' className='fixnav-logo' />
        </div>
        <div className='fixnav-links'>
          <div className='fixnav-link' onClick={()=>go2Location("/")}>
          <p className='fixnav-link underline' >Home</p>

          </div>
     
          <div className='fixnav-link fixnav-link-drop' >
          <p className='fixnav-link underline'>Opportunities <span className='fixnav-gt'>&gt;</span></p>
<div className='fixnav-dropdown'>
  <div className='fixnav-dropdown-link' onClick={()=>go2Location("/dc-cloud")}>DC & Cloud</div>
  <div className='fixnav-dropdown-link' onClick={()=>go2Location("/cloud-infra")}>Cloud Infrastructure</div>
  <div className='fixnav-dropdown-link' onClick={()=>go2Location("/medc")}>Micro & Edge Data Center</div>
  </div>

          </div>
          <div className='fixnav-link' onClick={()=>go2Location("/about")}>
          <p className='fixnav-link underline'>About</p>

          </div>
          <div className='fixnav-link' onClick={()=>go2Location("/contact")}>
          <p className='fixnav-link underline'>Contact</p>

          </div>
          <div className='fixnav-link' onClick={()=>go2Location("/login")}>
          <p className='fixnav-link underline'>Login</p>

          </div>
          <div className='fixnav-link' onClick={()=>go2Location("/register")}>
              <p className='fixnav-link underline'>Register</p>

          </div>
          </div>
          <div className='fixnav-hamburger'>
          <label for="check" className='hamburger-label'>
      <input type="checkbox" id="check" checked={menuOpen} 
              onChange={() => setMenuOpen(!menuOpen)}/> 
      <span></span>
      <span></span>
      <span></span>
    </label>

          </div>
  {menuOpen &&        <MenuBar  setIsOpen={setMenuOpen} />}
          <div className='fixnav-button'>
            <button className='fixnav-button2'>REGISTER NOW</button>
            </div>
    </div>
  )
}

export default FixedNav