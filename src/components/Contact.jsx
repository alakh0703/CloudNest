import React from 'react';
import CommonHeader from './CommonHeader';
import './styles/Contact.css';
import MapIcon from '../assets/images/map.png';
import MailIcon from '../assets/images/job-offer.png';
import LoadingAnimation from '../utils/LoadingAnimation';

const Contact = () => {
  return (
    <div className='contact-main'>
      <LoadingAnimation />

      <CommonHeader title='Contact Us' location='Contact' />
      <div className='contact-info-div'>
        <div className='contact-address'>
          <img src={MapIcon} alt='address' className='contact-map-icon' />
          <h3>Find our Office</h3>
          <p>Head Office - 200 Park Avenue, New York, NY 10166, United States</p>
          <hr className='contact-hr' />
          <p>Customer Support Center - 350 Queen Street, Brisbane City QLD 4000, Australia</p>
          <hr className='contact-hr' />
          <p>Customer Support Center - Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200, Brazil</p>
        </div>
        <div className='contact-other'>
          <img src={MailIcon} alt='address' className='contact-mail-icon' />

          <h3>Send Mail</h3>
          <p>contact@cloudnest.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
