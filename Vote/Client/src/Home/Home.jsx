import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'
import Navbar from '../Navbar/Navbar'
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='homediv'>
      <div className='bg'>
         <div className='content'>
            <p className='homeptag'>Voting is not just a right; it's a duty we owe to our society and future generations.As citizens, it's our responsibility to exercise our vote and shape the course of our nation.So let's</p>
              <Link to='/login'  className='votelink'>Vote Now</Link>
              <div className='homeregister'>
                  <p className='notreg'>Not registered yet?</p>
                  <Link to='/register' className='registerlink'>Register as a voter</Link>
                </div>
                <div className='homeregister'>
                <p className='notreg'>Already Registered?</p>
                <Link to='/login' className='registerlink'>Login Now</Link>
                </div>
          </div>        
      </div>     
    </div>
    </>
  )
}

export default Home
