import React from 'react'
import CommonHeader from './CommonHeader'
import "./styles/Register.css"

const Register = () => {
  return (
    <div  className='register-main'>

      <CommonHeader title="Register your Account" location="Register"/>
      <div className='register-form-div'>
        <form className='register-form'>
          <label className='register-label' htmlFor='first-name'>First Name</label>
          <input type='text' className='register-input' name='first-name' placeholder='First Name'/>
          <label className='register-label' htmlFor='last-name'>Last Name</label>
          <input type='text' className='register-input' name='last-name' placeholder='Last Name'/>
          <label className='register-label' htmlFor='email'>Email</label>
          <input type='email' className='register-input' name='email' placeholder='Email'/>
          <label className='register-label' htmlFor='password'>Password</label>
          <input type='password' className='register-input' name='password' placeholder='Password'/>
          <label className='register-label' htmlFor='confirm-password'>Confirm Password</label>
          <input type='password' className='register-input' name='confirm-password' placeholder='Confirm Password'/>
<label className='register-label' htmlFor='phone'>Phone</label>

          <input type='text' className='register-input' name='phone' placeholder='Phone'/>
          <label className='register-label' htmlFor='address'>Address</label>
          <input type='text' className='register-input' name='address' placeholder='Address'/>
          <label className='register-label' htmlFor='state'>Province</label>
          <select className='register-input' name='state'>
            <option value=''>Select Province</option>
            <option value='AB'>Alberta</option>
            <option value='BC'>British Columbia</option>
            <option value='MB'>Manitoba</option>
            <option value='NB'>New Brunswick</option>
            <option value='NL'>Newfoundland and Labrador</option>
            <option value='NS'>Nova Scotia</option>
            <option value='ON'>Ontario</option>
            <option value='PE'>Prince Edward Island</option>
            <option value='QC'>Quebec</option>
            <option value='SK'>Saskatchewan</option>


            </select>
            <label className='register-label' htmlFor='postalCode'>Postal Code</label>
          <input type='text' className='register-input' name='postalCode' placeholder='Postal Code'/>
          <div className='register-button-div'>
            Register
            <div className='register-circle'>
            &#x2192;
            </div>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Register