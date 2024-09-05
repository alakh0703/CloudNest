import React from 'react';
import './styles/Footer.css';
import Logo from  "../assets/images/Logo.png";
import CardImages from "../assets/images/Visa.png";
import MapPin from "../assets/images/map-pin.png";

const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={Logo} alt='Ironhack logo' className='footer-logo' />
          <p className='fl-p1'>
            CloudNest is your one-stop solution for all your data management and computing requirements for commencing smooth and uninterrupted business.
          </p>
          <img src={CardImages} alt='visa card' />
        </div>

        <div className='footer-content-center'>
          <h3 className='fc-h3'>Important Links</h3>
          <p>Refund Policy</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>

          <h3 className='fc-h3'>Locations</h3>
       
          <p>
            <span><img src={MapPin} alt='map pin' className='map-pin' /></span>
            Office - 221B Baker Street, London NW1 6XE, United Kingdom
          </p>
          <p>
            <span><img src={MapPin} alt='map pin' className='map-pin' /></span>
            Branch Office - 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States
          </p>
          <p>
            <span><img src={MapPin} alt='map pin' className='map-pin' /></span>
            Support Center - 1-1-1 Otemachi, Chiyoda City, Tokyo 100-0004, Japan
          </p>
      
          <p>
            <strong>Email:</strong> contact@cloudnest.com
          </p>
        </div>

        <div className='footer-content-right'>
          <h3>Support</h3>
          <p>Support Center</p>
          <p>Knowledgebase</p>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        {/* Footer bottom content can be added here if needed */}
      </div>
    </div>
  );
};

export default Footer;
