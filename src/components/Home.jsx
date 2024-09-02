import React, { useEffect } from 'react';
import './styles/Home.css';
import FixedNav from './FixedNav';
import HeroImage from "../assets/images/HeroImage.png"

const Home = () => {
  const rotatingText = ['Discover', 'Read', 'Share', 'Learn', 'Grow']
  let counter = 0



  return (
    <div className='home_main'>
      <FixedNav />
        <div className='home-hero'>
          <div className='home-hero-text'>
            <p className='home-hero-text-p'>Hosting freedom <br/>
            created smartly</p>
            in <span className='rotating-text'>{rotatingText[counter]}</span>
            <p className='home-hero-text-p'>in very <br/> <span className='home-hero-text-affordable'> affordable</span> price</p>
          </div>
          <div className='home-hero-image-div'>
            <img src={HeroImage} alt='hero' className='hhome-hero-image' />
            </div>
        </div>

        <div className='home-best-services'>
          Best Services
        </div>
        <div className='home-aboutus'>
            About us
        </div>
    </div>
  )
}

export default Home