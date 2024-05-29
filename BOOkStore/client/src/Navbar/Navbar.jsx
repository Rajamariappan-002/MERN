import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav>
            <h3>Online Book Store</h3>
          <div className='search'>
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>About Us</li>
            </ul>
            <div className='input-group'>
            <input type='text' placeholder='Search'>
            </input>
            <img src='./assets/close.png'></img>

            </div>
            </div>  
        </nav>
    </div>
  )
}

export default Navbar