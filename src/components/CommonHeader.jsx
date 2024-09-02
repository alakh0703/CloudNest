import React from 'react';
import './styles/CommonHeader.css';
import FixedNav from './FixedNav';
import HomeIcon from "../assets/images/home-icon.png"

const CommonHeader = ({title, location}) => {
    const goHome = () => {
        window.location.href = '/';
    }
  return (
    <div className='common-header-main'>
        <FixedNav />
        <div className='common-header-info'>
            <h1 className='common-header-info-h1'>{title}</h1>
            <p className='common-header-main-text'><img src={HomeIcon} alt='home-icon' className='common-header-main-homeicon' onClick={goHome}/> Home &gt; {location}</p>
            </div>
    </div>
  )
}

export default CommonHeader