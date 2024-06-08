import React from 'react'
import {Link} from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
        <Link to='/dashboard/admin/addroom'>Add a Room</Link><br/>
        <Link to='/dashboard/admin/resolvecomplaints'>View Complaints</Link>
        <Link to='/register'>Register a Student</Link>
        
    </div>
  )
}

export default AdminDashboard