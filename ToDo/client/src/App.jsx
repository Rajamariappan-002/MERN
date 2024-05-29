import React from 'react'
import { useState } from 'react'
import './App.css'


const App = () => {

  const [activity,setactivity] = useState('')
  const [filteractivity,setfilteractivity] = useState('')
  const [activities,setactivities] = useState([])
  const [completedactivities, setcompletedactivities] = useState([])
  const [filteredactivities, setfilteredactivites] = useState([])
  

  const addactivity = () =>{
    
    if(activity.trim()!==''){
      setactivities([...activities,activity])
      setactivity('')
    }
  }
  
  const addcompletedactivities = (e,compActivity) =>{

    var par = e.target.parentNode.parentNode
    par.style.backgroundColor='lightgreen'
    par.style.textDecoration = 'line-through'
    setcompletedactivities([...completedactivities,compActivity])     
  }

  const DelActivity = (delactivity) => {
    setactivities(activities.filter(activity=>activity!==delactivity))
  }

  const filtertask = (filteractivity) =>{
    setfilteredactivites(activities.filter(activity=>activity == filteractivity))
  }


  return (
    <>
    <div className='todo'>
      <div className='add-activity'>
        <input type='text' placeholder='Add an activity' value={activity} onChange={(e)=>setactivity(e.target.value)}></input>
      </div>

      <button onClick={addactivity} className='addbutton'>Add Activity</button>
    </div>
    <div id='task'>
    <div className='taskcontainer'>
    {activities.map((value,index)=>(
       <li key={index} className='items' >{value}
        <div id='statuscontainer'>
          <img src='./assets/check.png' className='complete' onClick={(e) =>{
          
            addcompletedactivities(e,value)
            }}/>
          <img src='./assets/bin.png' className='delete' onClick={(e)=>{DelActivity(value)}}/>   
      </div>
    </li>
    ))}
  </div>
 
  </div>

  <div id='filter'>
    <input type='text' value={filteractivity} onChange={(e)=>{setfilteractivity(e.target.value)}}/>
    <button onClick={(e)=>{filtertask(filteractivity)}}>Filter</button>

    {
      filteredactivities.map((value,index)=>{
        return <li key={index}>{value}</li>
      })
    }
  </div>


  </>
  )
}



export default App