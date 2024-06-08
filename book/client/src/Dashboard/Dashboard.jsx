import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import ViewRooms from '../ViewRooms/ViewRooms'

const Dashboard = () => {

  

  return (
    <div>
        <h3>Dashboard</h3>

        <ViewRooms/>
        <Link to='/dashboard/complaintregister'>Register a complaint</Link>

    </div>
  )
}

export default Dashboard