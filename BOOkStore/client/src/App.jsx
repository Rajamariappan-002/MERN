import React from 'react'
import Navbar from './Navbar/Navbar'
import BookStore from './BookStore/BookStore'

const App = () => {
  return (
    <div className='app-div'>
      <Navbar/>
      <BookStore/>
    </div>
  )
}

export default App