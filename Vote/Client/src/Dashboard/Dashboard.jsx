import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
  const location = useLocation()
  const email = location.state.id2

  const handleclick = async (event,name) =>{
    event.preventDefault();
    axios.post("http://localhost:3001/votecount",{name,email}).then((response) =>{
      if(response.data.status === "success"){
        alert(response.data.message)
      }
      else if(response.data.status === "voted"){
        alert(response.data.message)
      }
      else if(response.data.status === "error"){
        alert(response.data.message)
      }
    })

  }

  return (
    <>
    <Navbar/>
    <div id='username'>
      <img src='./assets/account.png'/>
      <h4>{location.state.id1}</h4>
    </div>
    <div className='maindiv'>
      <div className='Votelist'>        
        <ul className='canlist'>
        <h3 >Candidate List</h3>
            <li className='canitem'>
                <img src='./assets/Bjp.png' alt='name' className='images'/>
                <p>Candidate1</p>
                <button className='vote-btn' onClick={(e)=>{handleclick(e,"candidate1")}} >Vote</button>
            </li>
            <li className='canitem'>
                <img src='./assets/sun.png' alt='name' className='images'/>
-                <p>Candidate2</p>
                <button className='vote-btn'  onClick={(e)=>{handleclick(e,"candidate2")}}>Vote</button>
            </li>
            <li className='canitem'>
                <img src='./assets/two.png' alt='name' className='images'/>
                <p>Candidate3</p>
                <button className='vote-btn'  onClick={(e)=>{handleclick(e,"candidate3")}}>Vote</button>
            </li>
            <li className='canitem'>
                <img src='./assets/karaoke.png' alt='name' className='images'/>
                <p>Candidate4</p>
                <button className='vote-btn'  onClick={(e)=>{handleclick(e,"candidate4")}}>Vote</button>
            </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Dashboard
