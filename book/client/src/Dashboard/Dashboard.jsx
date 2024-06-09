import React, {useState} from 'react'

import axios from 'axios'
import {Link} from 'react-router-dom'
import './Dashboard.css'
import ViewRooms from '../ViewRooms/ViewRooms'


const Dashboard = () => {

  const [isvisible, setisvisible] = useState(false)

  const menutoggle = () =>{
   
    setisvisible(!isvisible)
  }

  return (
   
    <div className='dashboard-div'>
      <nav>
      <img src='./assets/menu-bar.png' alt='menu-bar' onClick={menutoggle}></img>
        <div className='stu-dashboard'><h3>Student Dashboard</h3></div>
       
        
      </nav>

      <div className={`menu-bar ${isvisible?'visible':''}`}>

      <div className='loguser'>
          <h4>Raja mariappan</h4>
      </div>

      <div className='navbar'>
        <li>Home</li>
        <li>Register a Complaint</li>
        <li>Rules</li>
        <li>Profile</li>
        </div>
      </div>
      <div className='roomsview'>
        <ViewRooms/>
      </div>

    </div>
   
  )
}

export default Dashboard