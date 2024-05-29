import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './Login.css'

const Login = () => {

  const [email,setemail] = useState("")
  const [password, setpassword] = useState("")

  const history = useNavigate();

  const LoginUser = async (event) =>{
    event.preventDefault();
    try{
      axios.post("http://localhost:3001/userlogin",{email,password}).then((response)=>{
        if(response.data.status == "error"){
          alert(response.data.message)
        }
        else if(response.data.status == "success"){
          alert(`user Login successful`)
          history("/dashboard", {state:{id1:response.data.user.name,id2:response.data.user.email}})
        }
        else{
          alert(response.data.error)
        }
      }
      )
    }catch(e){
      console.log(e)
    }

  }


  return (
    <div className='registerdiv'>
      <form className='logcontainerdiv' onSubmit={LoginUser}>
        <h2>Login</h2>
        <label htmlFor='email'>Email Address</label>
        <input type='email' name='email'  onChange={(e) => setemail(e.target.value)}/>
      
        <label htmlFor='password' >Password</label>
        <input type='password' name='password' onChange={(e) => setpassword(e.target.value)} />
       
        <center><button type='submit' className='submit-btn'>Login</button></center>
      </form>
    </div>
  )
}

export default Login
