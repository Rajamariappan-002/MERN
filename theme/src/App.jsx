import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import {UserInfoContext} from './UserContext'

const App = () => {

  const [name,setname] = useState('')

  return (
    <div>
    <UserInfoContext.Provider value={{name, setname}}> 
       <Routes>
         <Route exact path ='/' element={<Login/>}/>
         <Route path ='/dashboard' element={<Dashboard/>}/>
      </Routes>
  </UserInfoContext.Provider>
  </div>

  )
}

export default App