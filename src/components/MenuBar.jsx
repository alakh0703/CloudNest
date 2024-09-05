import React from 'react';
import './styles/MenuBar.css';

const MenuBar = ({ setIsOpen }) => {
  const go2Location = (location) => {
    window.location.href = location;
  };

  return (
    <div className='menubar-main'>
      <button className='menubar-close-button' onClick={() => setIsOpen(false)}>
        &times;
      </button>

      <div className='menubar-link' onClick={() => go2Location("/")}>
        Home
      </div>
      <div className='menubar-link'>
        Opportunities <span className='menubar-gt'>&gt;</span>
        <div className='menubar-dropdown'>
          <div className='menubar-dropdown-link' onClick={() => go2Location("/dc-cloud")}>
            DC & Cloud
          </div>
          <div className='menubar-dropdown-link' onClick={() => go2Location("/cloud-infra")}>
            Cloud Infrastructure
          </div>
          <div className='menubar-dropdown-link' onClick={() => go2Location("/medc")}>
            Micro & Edge Data Center
          </div>
        </div>
      </div>
      <div className='menubar-link' onClick={() => go2Location("/about")}>
        About
      </div>
      <div className='menubar-link' onClick={() => go2Location("/contact")}>
        Contact
      </div>
      <div className='menubar-link' onClick={() => go2Location("/login")}>
        Login
      </div>
      <div className='menubar-link' onClick={() => go2Location("/register")}>
        Register
      </div>
    </div>
  );
};

export default MenuBar;
