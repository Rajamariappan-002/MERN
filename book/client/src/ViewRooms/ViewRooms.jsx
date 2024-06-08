import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const ViewRooms = () => {

    const [Rooms, setRooms] = useState([])

    useEffect(()=>{
        
        axios.get("http://localhost:3001/viewrooms").then((response)=>{
                try{
                    setRooms(response.data.Rooms)
                }catch(e){
                    console.log(e)
                }              

        }).catch((e)=>{
            console.log(e)
        })

    }, [])

   

  return (
    <div>
        <div>
            {
                Rooms.map((value, index)=>(
                    <div key={index}>{value.roomno}{value.roomtype}</div>
                ))
            }
        </div>
        
        
    </div>
  )
}

export default ViewRooms