import React, { useState } from 'react'
import Axios from 'axios'


const Register = () => {

    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const [cnfpassword, setcnfpassword] = useState('')


    const handleregister = async (event) =>{
        event.preventDefault()

        if(password!==cnfpassword){
            alert('Password Mismatch')
        }

        Axios.post("http://localhost:3001/registeruser",{email,name,password}).then((response)=>{
            alert("User Created Successfully")
        }).catch((e)=>{
            console.log(e)
        })

    }

  return (
    <div>
        <h3>Register</h3>
        <form onSubmit={handleregister}>
            <input type='email' placeholder='Enter Your Email' onChange={(e)=>setemail(e.target.value)} value={email} required/>
            <input type='text' placeholder = 'Enter Your Name' onChange={(e)=>setname(e.target.value)} value={name} required/>
            <input type='password' placeholder='Enter Your Password' onChange={(e)=>setpassword(e.target.value)} value={password} required/>
            <input type='password' placeholder='Confirm Password' value={cnfpassword} onChange={(e)=>setcnfpassword(e.target.value)} required/>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register