import React, { useState, useEffect } from 'react';
import './styles/LoadingAnimation.css';

const LoadingAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
     const timer = setTimeout(() => {
      setIsVisible(false); 
    }, 1700);

    
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;  

  return (
    <div className='loading-screen'>
      <div className='loading-dot'></div>
    </div>
  );
};

export default LoadingAnimation;
