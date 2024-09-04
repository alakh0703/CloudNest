import React from 'react'
import CommonHeader from './CommonHeader';
import './styles/AboutUs.css';
import AboutUsImage from "../assets/images/AboutUs.png"
import ServiceIcon1 from "../assets/images/service-icon1.png";
import ServiceIcon2 from "../assets/images/service-icon2.png";
import ServiceIcon3 from "../assets/images/service-icon3.png";
import ServiceIcon4 from "../assets/images/service-icon4.png";
import ServiceIcon5 from "../assets/images/service-icon5.png";
import ServiceIcon6 from "../assets/images/service-icon6.png";
import ServiceIcon7 from "../assets/images/service-icon7.png";
import ServiceIcon8 from "../assets/images/service-icon8.png";

const AboutUs = () => {
  return (
    <div className='about-us'>
      <CommonHeader title='About Us' location='About Us' />
      <div className='about-us-content'>
        <div className='about-us-content-header'>
          <h2>Meet Us</h2>
          <p>Welcome to My cloud Space, where cutting-edge technology meets unparalleled reliability. As a leading force in the datacenter industry, we take pride in providing state-of-the-art solutions that empower businesses to thrive in the digital era.</p>
          <img src={AboutUsImage} alt="About Us" className='about-us-content-image'/>
        </div>
        <div className='about-us-content-services'>
          <h2>Best Services</h2>
          <p className='p1'>Save up to 60% compared to other cloud provider designer developers bloggers
          designers developers, bloggers and online businesses.</p>
          <div className='about-us-cards'>
       <div className='about-us-card'>
        <img src={ServiceIcon1} alt="Service Icon 1" />
        <p>99.99% Uptime SLA</p>
        </div>
        <div className='about-us-card'>
        <img src={ServiceIcon2} alt="Service Icon 1" />

        <p>Cloud Firewall</p>
        </div>
        <div className='about-us-card'>
        <img src={ServiceIcon3} alt="Service Icon 1" />

      <p>Monitoring & Alerting</p>
        </div>
        <div className='about-us-card'>
        <img src={ServiceIcon4} alt="Service Icon 1" />

        <p>Enterprise SSDs</p>
        </div>
        <div className='about-us-card'>
        <img src={ServiceIcon5} alt="Service Icon 1" />

        <p>Global Data Center</p>
        </div>
        <div className='about-us-card'>
        <img src={ServiceIcon6} alt="Service Icon 1" />

        <p>Domain Name Server</p>
        </div>
        <div className='about-us-card'>
        <img src={ServiceIcon7} alt="Service Icon 1" />

        <p>Easy to use API</p>
        </div>
        <div className='about-us-card'>
        <img src={ServiceIcon8} alt="Service Icon 1" />

        <p>4GbE Connections</p>
        </div>
     </div>
        </div>
      
        <div className='about-us-content-mission'>
          <h2>Our Mission</h2>
          <p>At mycloudspace.live, our mission is to redefine the standards of data hosting and management. We believe that data is at the heart of every successful enterprise, and our goal is to offer secure, scalable, and efficient datacenter services that propel businesses forward.</p>
            <h2>Who we are</h2>
            <p>Established in 2023, Shootsace digital private limited has emerged as a trusted partner for businesses seeking top-tier datacenter solutions. Our team of seasoned experts brings a wealth of experience in designing, implementing, and managing data infrastructure, ensuring our clients can focus on their core competencies while we handle the complexities of data management.</p>
        </div>
        </div>
    </div>
  )
}

export default AboutUs