import React from 'react';
import './styles/Footer.css';
import Logo from  "../assets/images/Logo.png"
import CardImages from "../assets/images/Visa.png"
import MapPin from "../assets/images/map-pin.png"
const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={Logo} alt='Ironhack logo' className='footer-logo' />
          <p className='fl-p1'>MyCloudSpace is your one-stop solution for all your data management and computing requirements for commencing smooth and uninterrupted business.</p>
          <img src={CardImages} alt='visa card' />

          </div>
          <div className='footer-content-center'>
            <h3 className='fc-h3'>Important Links</h3>
            <p>Refund Policy</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <h3 className='fc-h3'>Locations</h3>
            <p>            <span><img src={MapPin} alt='map pin' className='map-pin' /></span>
            Head Office- 303 ,Tower D ,WTC GIFT Tower A,B & D,GIFT CITY ,GANDHINAGAR-382355</p>
            <p> <span><img src={MapPin} alt='map pin' className='map-pin' /></span>Customer Support Center- Ground floor 7 Square mall Hyderpora byepas srinagar 190015</p>
            <p> <span><img src={MapPin} alt='map pin' className='map-pin' /></span>Customer Support Center- Nankiana chawk, Manshaian colony. Gate no.1, New goyal plywood complex First floor - Shoot Space City/ Distt. Sangrur(Punjab) Pin code - 148001</p>

            <p> <strong>Email:</strong> info@mycloudspace.live</p>
            </div>
        <div className='footer-content-right'>
          <h3>Support</h3>
          <p>Support Center</p>
          <p>Knowledgebase</p>
          </div>  

        </div>
        <hr/>
        <div className='footer-bottom'>
          </div>
    </div>
  )
}

export default Footer