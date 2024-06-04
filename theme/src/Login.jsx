import React, {useContext} from 'react'
import {UserInfoContext} from './UserContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

   const {name,setname} = useContext(UserInfoContext)
    const history = useNavigate()

   const handlelogin = () =>{
        history('/dashboard')
   }

  return (
    <div>
        <h3>Login</h3>
        <input type='text' placeholder='Enter your name' value={name} onChange={(e)=>setname(e.target.value)} required />
        <button onClick={handlelogin}>Login</button>
    </div>
  )
}

export default Login