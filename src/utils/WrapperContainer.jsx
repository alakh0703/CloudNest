import React from 'react';
import './styles/WrapperContainer.css';

const WrapperContainer = ({children}) => {
  return (
    <div className='wrapper-container-main'>{children}</div>
  )
}

export default WrapperContainer