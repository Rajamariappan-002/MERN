import React from 'react'
import './Register.css'
import { useState } from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [confirmpassword, setconfirmpassword] = useState("")

  const navigate = useNavigate();
  
  const SaveUser = (event) =>{
    event.preventDefault();

    if(confirmpassword!=password){
      alert("Password Mismatch")
    }
    else{
      Axios.post("http://localhost:3001/registerUser",{name,email,password}) .then((response) => {
        alert("User Created Successfully...");
        navigate("/login")
      }).catch((error)=>{
          console.log(error)
      })  
    }
  }

  return (
    <div className='registerdiv'>
      <form className='containerdiv' onSubmit={SaveUser}>
        <h2>Registration</h2>
        <label htmlFor='email'>Email Address</label>
        <input type='email' name='email' onChange={(e) => {setemail(e.target.value)}} />
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' onChange={(e) => {setname(e.target.value)}} />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' onChange={(e) => {setpassword(e.target.value)}}/>
        <label htmlFor='password'>Confirm Password</label>
        <input type='password' name='confirmpassword' onChange={(e) => {setconfirmpassword(e.target.value)}}/>
        <center><button type='submit' className='submit-btn' >Register</button></center>
      </form>
    </div>
  )
}

export default Register
