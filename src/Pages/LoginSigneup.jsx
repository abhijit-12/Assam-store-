import React from 'react'
import './CSS/LoginSigneup.css'

export const LoginSigneup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" id="" placeholder='Your Name' required />
          <input type="email" name="" id="" placeholder='Enter Email' required />
          <input type="password" name="" id="" placeholder='Enter Password' required />
        </div>
        <button>Submit</button>
        <p className='loginsignup-login'>Alrady have an account?<span> Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
