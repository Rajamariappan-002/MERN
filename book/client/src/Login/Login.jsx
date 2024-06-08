import React, { useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'



const Login = () => {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const history = useNavigate()

    const handlelogin = async (event) =>{
        event.preventDefault();

        axios.post("http://localhost:3001/loginuser",{email,password}).then((response)=>{
            if(response.data.status == 'success'){
              alert(response.data.message)
              history("/dashboard",{state:{id1:response.data.user}})
            }else if(response.data.status == 'failure'){
              alert(response.data.messsage)
            }
        }).catch((e)=>{
          console.log(e)
        })
    }

  return (
    <div>
        <h3>Login</h3>
        <form onSubmit={handlelogin}>
            <input type='email' placeholder='Enter Your Email' value={email} onChange={(e)=>setemail(e.target.value)} required/>
            <input type='password' placeholder='Enter Your Password' value={password} onChange={(e)=>setpassword(e.target.value)} required/>
            <button type='submit'>Login</button>
        </form>

        <Link to='/register'>Register Now</Link>
        <Link to='/adminlogin'>Admin Login</Link>
    </div>
  )
}

export default Login