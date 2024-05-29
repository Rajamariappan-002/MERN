import React from 'react'
import { Link } from 'react-router-dom'
import Results from '../Results/Results'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
      <h3 className='title'>Online Voting System</h3>
    <ul>
        <li id='navitem'><Link to='/' id='navitem'>Home</Link></li>
        <li id='navitem'><Link to='/results' id='navitem'>Results</Link></li>
        <li id='navitem'>About us</li>
    </ul>
    </div>
  )
}

export default Navbar
