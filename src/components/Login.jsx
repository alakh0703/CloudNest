import React from 'react'
import CommonHeader from './CommonHeader';
import "./styles/Login.css"

const Login = () => {
  return (
    <div className='login-main'>
      <CommonHeader  title="Welcome back" location="Login"  />
      <div className='login-form-div'>
<form className='login-form'>
      <label className='login-label' htmlFor="MRN">MRN</label>
      <input type='text' className='login-input' name='MRN' placeholder='MRN'/>
      <label className='login-label' htmlFor="password">Password</label>
      <input type='password' className='login-input' name='password' placeholder='*********'/>
      <div className='login-other-options'>
        <div className='login-remember-me'>
          <input type='checkbox' name='remember-me' />
          <label htmlFor='remember-me' className='remember-me'>Remember Me</label>
          </div>
          <div className='login-forgot-password'>
            <p>Forgot password?</p>
          </div>
      </div>

      <div className='login-button-div'>
        Login
        <div className='login-circle'>
          &#x2192;
        </div>
        </div>
  </form>
        </div>
      </div>
  )
}

export default Login