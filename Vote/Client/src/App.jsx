import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import "./App.css"
import Dashboard from './Dashboard/Dashboard'
import Home from './Home/Home'
import Register from './Register/Register'
import Login from './Login/Login'
import Results from './Results/Results'

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/results' element={<Results/>}/>
    </Routes>
    </div>
  );
}

export default App
