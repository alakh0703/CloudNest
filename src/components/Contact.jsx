import React from 'react'
import CommonHeader from './CommonHeader';
import './styles/Contact.css';
import MapIcon  from '../assets/images/map.png';
import MailIcon from '../assets/images/job-offer.png';

const Contact = () => {
  return (
    <div className='contact-main'>
      <CommonHeader title='Contact Us' location='Contact' />
      <div className='contact-info-div'>
        <div className='contact-address'>
          <img src={MapIcon} alt='address' className='contact-map-icon'/>
          <h3>Find our Office</h3>
          <p>Head Office-303 ,Tower D ,WTC GIFT Tower A,B & D,GIFT CITY ,GANDHINAGAR-382355</p>
          <hr className='contact-hr'/>
          <p>Customer Support Center-Ground floor 7 Square mall Hyderpora byepas srinagar 190015</p>
          <hr className='contact-hr'/>
          <p>Customer Support Center-Nankiana chawk, Manshaian colony. Gate no.1, New goyal plywood complex First floor - Shoot Space City/ Distt. Sangrur(Punjab) Pin code - 148001</p>
        </div>
        <div className='contact-other'>
        <img src={MailIcon} alt='address' className='contact-mail-icon'/>

          <h3>Send Mail</h3>
          <p>info@cloudnest.com</p>
          </div>
        </div>
    </div>
  )
}

export default Contact