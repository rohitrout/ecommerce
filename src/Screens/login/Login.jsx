import React from "react";
import { useState } from "react";
import "./login.css"
const Login = () => {

const [ name, setName ] = useState(""); 
const [ password, setPassword ] = useState("");

const handleChange=(e)=>{
    e.preventDefault();
    
    const inputData={
      enteredName: name,
      enteredPassword: password
    }
    console.log(inputData)
    setName('')
    setPassword('')
    
  //{name==="admin" && password ==="1234" ? <p>Heelo, You are succesfully Logged in</p> : <p>Sorry Try again</p>}


}
    return (
    <div className='login-form'>
      <form onClick={handleChange}>
        <div className='form-elements'>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /></div>
        <div className='form-elements'>
        <label htmlFor="name">Password </label>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></div>        
        <button >SUBMIT</button>
        {/* {isLognSuccess && <></>} */}
      </form>
     
    </div>
    )
}

export default Login; 