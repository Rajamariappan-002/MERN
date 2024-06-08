import React, {useState} from 'react'
import axios from 'axios'

const AddRoom = () => {

    const [roomno, setroomno] = useState('')
    const [roomcapacity, setcapacity] = useState('')
    const [roomtype, setroomtype] = useState('Ac')

    const handlesubmit = async (event) =>{
        event.preventDefault();

        const isconfirmed = window.confirm("Are you Sure You want to add this room?")
        if(isconfirmed){
            const seatavailability = roomcapacity

            axios.post("http://localhost:3001/addroom",{roomno, roomcapacity, roomtype, seatavailability}).then((response)=>{
                    alert(response.data.message)
            })
        }
    }
 
    
  return (
    <div>
        <h3>Add Room</h3>
        <form onSubmit={handlesubmit}>
            <input type='text' placeholder='Enter Room no.' onChange={(e)=>setroomno(e.target.value)}required/>
            <input type='text' placeholder='Enter Room Capacity' onChange={(e)=>setcapacity(e.target.value)}required/>
            <select id='roomtype'  onChange={(e)=>setroomtype(e.target.value)} required>
                <option value='Ac'>Ac</option>
                <option value='Non-Ac'>Non-Ac</option>
            </select>
            <button type='submit'>Add Room</button>
        </form>
    </div>
  )
}

export default AddRoom