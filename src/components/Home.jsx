import React, { useEffect, useState } from 'react';
import Feature1 from "../assets/images/feature1.png";
import Feature2 from "../assets/images/feature2.png";
import HeroImage from "../assets/images/HeroImage.png";
import homebest1 from "../assets/images/homebest1.png";
import homebest2 from "../assets/images/homebest2.png";
import homebest3 from "../assets/images/homebest3.png";
import homebest4 from "../assets/images/homebest4.png";
import homebest5 from "../assets/images/homebest5.png";
import homebest6 from "../assets/images/homebest6.png";
import homebest7 from "../assets/images/homebest7.png";
import homebest8 from "../assets/images/homebest8.png";
import FixedNav from './FixedNav';
import './styles/Home.css';
import LoadingAnimation from '../utils/LoadingAnimation';
const Home = () => {
  const rotatingText = ['your cloud','your website','your hosting'];
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (typing) {
      timeout = setTimeout(() => {
        setDisplayText(rotatingText[index].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === rotatingText[index].length) {
          setTyping(false);
        }
      }, 200);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(rotatingText[index].slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setTyping(true);
          setIndex((index + 1) % rotatingText.length);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [typing, charIndex, index, rotatingText]);

  return (
    <>
    <div className='home_main'>
      <FixedNav />
      <LoadingAnimation />

        <div className='home-hero'>
          <div className='home-hero-text'>
            <p className='home-hero-text-p'>Hosting freedom <br/>
            created smartly</p> 
            <span className='home-hero-text-p2'>in&nbsp;</span>
            <span className='rotating-text'>{displayText}</span>
            <span className="cursor">|</span>
            <p className='home-hero-text-p'>in very <br/> <span className='home-hero-text-affordable'> affordable</span> price</p>
            <p className='home-hero-text-lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat aut exercitationem!</p>
            <div className='home-hero-text-buttons'>
              <div className='start-now'>
        Start Now
        <div className='login-circle'>
          &#x2192;
        </div>
        </div>
              <div className='home-hero-text-button2'>
              <div className='play-btn'><div className='triangle' /></div>
              <p>How it works?</p>
              </div>
              </div>
          </div>
          <div className='home-hero-image-div'>
            <img src={HeroImage} alt='hero' className='home-hero-image' />
            </div>
        </div>
    <div className='home-4f'>
      <div className='home-4f-card'>
        <h3>DC & Cloud</h3>
        <p>Lorem ipsum dolor sit.</p>
        </div>
      <div className='home-4f-card'>
        <h3>DC & Cloud</h3>
        <p>Lorem ipsum dolor sit.</p>
        </div>
      <div className='home-4f-card'>
        <h3>DC & Cloud</h3>
        <p>Lorem ipsum dolor sit.</p>
        </div>
      <div className='home-4f-card'>
        <h3>DC & Cloud</h3>
        <p>Lorem ipsum dolor sit.</p>
        </div>
    </div>
        <div className='home-best-services'>
          <h2>Best Services</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolor!</p>
          <div className='best-service-cards'>
       <div className='best-service-card'>
        <img src={homebest1} alt="Service Icon 1" />
        <p>99.99% Uptime SLA</p>
        </div>
        <div className='best-service-card'>
        <img src={homebest2} alt="Service Icon 1" />

        <p>Cloud Firewall</p>
        </div>
        <div className='best-service-card'>
        <img src={homebest3} alt="Service Icon 1" />

      <p>Monitoring & Alerting</p>
        </div>
        <div className='best-service-card'>
        <img src={homebest4} alt="Service Icon 1" />

        <p>Enterprise SSDs</p>
        </div>
        <div className='best-service-card'>
        <img src={homebest5} alt="Service Icon 1" />

        <p>Global Data Center</p>
        </div>
        <div className='best-service-card'>
        <img src={homebest6} alt="Service Icon 1" />

        <p>Domain Name Server</p>
        </div>
        <div className='best-service-card'>
        <img src={homebest7} alt="Service Icon 1" />

        <p>Easy to use API</p>
        </div>
        <div className='best-service-card'>
        <img src={homebest8} alt="Service Icon 1" />

        <p>4GbE Connections</p>
        </div>
           </div>
        </div>
       
    </div>
     <div className='home-aboutus'>
     <div className='home-aboutus-top'>
      <div className='home-aboutus-left'>
        <img src={Feature1} alt='About Us'  className='hal-img'/>
      </div>
      <div className='home-aboutus-right'>

<h3>About Us</h3>   
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum voluptatem repellendus a earum odit ducimus, aut laudantium modi quo vitae aliquid optio, veniam incidunt, eveniet repellat dicta unde! Numquam, obcaecati.</p>
<div className='start-now'>
        VIEW DETAILS
        <div className='login-circle'>
          &#x2192;
        </div>
   </div>
      </div>
     </div>
     <div className='home-aboutus-bottom'>
      <div className='home-aboutus-bottom-left'>
<h3>You're Our Priority 24x7 Cloud Nest services</h3> 
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente iste illo deserunt vero maxime eveniet laboriosam ipsam placeat nulla.</p>       
</div>
        <div className='home-aboutus-bottom-right'>
        <img src={Feature2} alt='About Us'  className='hal-img'/>
          </div>
      </div>
 </div>
 </>
  );
}

export default Home;
