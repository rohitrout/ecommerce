import React from 'react';
import "./signup.css"

const SignUp = () => {
  return (
    <div className='signup-form'>
      <form action="">
        <div className='form-elements'>
        <label htmlFor="name">Name</label>
        <input type="text" /></div>
        <div className='form-elements'>
        <label htmlFor="name">Email</label>
        <input type="text" /></div>
        <div className='form-elements'>
        <label htmlFor="name">Password </label>
        <input type="password" /></div>
        <div className='form-elements'>
        <label htmlFor="name">Confirm_Password </label>
        <input type="password" /></div>
        
        <button>SUBMIT</button>
      </form>
     
    </div>

  )
}

export default SignUp