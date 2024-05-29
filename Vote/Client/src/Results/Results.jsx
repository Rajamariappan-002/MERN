import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import './Results.css'

const Results = () => {

    const [candidate1,setcandidate1] = useState(0)
    const [candidate2,setcandidate2] = useState(0)
    const [candidate3,setcandidate3] = useState(0)
    const [candidate4,setcandidate4] = useState(0)

    const [winner, setwinner] = useState("")

    useEffect(()=>{
      const maxvote = Math.max(candidate1,candidate2,candidate3,candidate4)
        if(maxvote == candidate1){
            setwinner("candidate1")
        }else if(maxvote == candidate2){
                setwinner("candidate2")
        }else if(maxvote == candidate3){
            setwinner("candidate3")
        }else{
            setwinner("candidate4")
        }
    },[])


    
    axios.post("http://localhost:3001/getvotecount").then((response)=>{
        if(response.data.status == 'error'){
            alert("Something Went wrong")
        }
        else{
            setcandidate1(response.data.candidate1.votecount)
            setcandidate2(response.data.candidate2.votecount)
            setcandidate3(response.data.candidate3.votecount)
            setcandidate4(response.data.candidate4.votecount)
           
        }
    })


  return (
    <div>
        <Navbar />
    <div className='result-div'>
        <div className='name-container'>
            <img src='./assets/Bjp.png'></img>
            <p>Number of votes : {candidate1}</p>
        </div>
        
        <div className='name-container'>
             <img src='./assets/sun.png'></img>
             <p>Number of votes : {candidate2}</p> 
        </div>
        <div className='name-container'>
             <img src='./assets/two.png'></img>
            <p>Number of votes : {candidate3}</p>
        </div>
        <div className='name-container'>
            <img src='./assets/karaoke.png'></img>
            <p>Number of votes : {candidate4}</p>
        </div>
        
    </div>
    <div className='winner-div'>
        <center><p>Current Winner is : {winner}</p></center>
    </div>
    
    </div>
  )
}

export default Results
