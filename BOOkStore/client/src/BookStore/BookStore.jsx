import React from 'react'
import './BookStore.css'

const BookStore = () => {

    const BookList = [{book:"Book1", Price:200, imageurl:'./assets/R.jpg'}, {book:"Book2", Price:150,imageurl:'./assets/th.jpg'},{book:"Book3", Price:300,imageurl:'./assets/OIP.jpg'},{book:"Book4", Price:180,imageurl:'./assets/Book4.jpg'},{book:"Book5", Price:220,imageurl:'./assets/Book5.jpg'},{book:"Book6", Price:480,imageurl:'./assets/Book6.jpg'}]


  return (
    <div className='book-div'>
        <div className='main-div'>

           {
            BookList.map((value,index)=>{
                return <div className='book-holder'>
                        <img src={value.imageurl}></img>
                        <li key={index}>{value.book}<br/>Rs.{value.Price}</li>
                        <div>
                        <button className='cart'>Add to cart</button>
                        </div>
                        

                    </div>
            })
           }
        </div>
    </div>
  )
}

export default BookStore