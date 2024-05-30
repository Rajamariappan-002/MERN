import React, {useEffect, useState} from 'react'
import './BookStore.css'

const BookStore = () => {

    const BookList = [{book:"Book1", Price:200, imageurl:'./assets/R.jpg'}, {book:"Book2", Price:150,imageurl:'./assets/th.jpg'},{book:"Book3", Price:300,imageurl:'./assets/OIP.jpg'},{book:"Book4", Price:180,imageurl:'./assets/Book4.jpg'},{book:"Book5", Price:220,imageurl:'./assets/Book5.jpg'},{book:"Book6", Price:480,imageurl:'./assets/Book6.jpg'}]

    const [cart,setcart] = useState([])
  

    const AddToCart = (value) =>{

      try{
        setcart(cart=>[...cart,value])
        alert("Item added to Cart Successfully..")
      }catch(e){
        console.log(e)
      }
        
    }

    const ClearCart = () =>{
      setcart([])
      alert("Cleared the Cart")
    }

  

  return (
    <div className='book-div'>
        <div className='main-div'>
            {
            BookList.map((value,index)=>{
                return <div className='book-holder' key={index}>
                        <img src={value.imageurl}></img>
                        <li key={index}>{value.book}<br/>Rs.{value.Price}</li>
                        <div>
                        <button className='cart' onClick={()=>AddToCart(value)}>Add to cart</button>
                        </div>
                    </div>
            })
           }
        </div>

        <button onClick={()=>ClearCart()}>Clear Cart</button>
    </div>
  )
}

export default BookStore