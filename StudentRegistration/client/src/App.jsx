import React,{useEffect, useState} from 'react'
import './App.css'


const App = () => {

  const [student, setstudent] = useState('')
  const [age, setage] = useState('')
  const [department, setdepartment] = useState('')
  const [studentList, setstudentList] = useState([])
  const [searchstudent, setsearchstudent] = useState('')
  const [searchList, setSearchList] = useState([])
  const [toggle, settoggle] = useState(false)

  useEffect(()=>{
      const storedStudents = localStorage.getItem("StudentList")
      if(storedStudents){
        setstudentList(JSON.parse(storedStudents))
      }
  },[])

  const StoreStudent = async (event) =>{
      try{
        event.preventDefault();
        if(student.trim()!==''){
        const newStudentList = [...studentList,{name:student, age:age, department:department}]
        setstudentList(newStudentList)
        localStorage.setItem("StudentList", JSON.stringify(newStudentList))
        
        alert("Student Registered Successfully")
        setstudent('')
        setage('')
        setdepartment('')
      }else{
        alert("Please input some values...")
      }
      }catch(e){
        console.log(e)
      }
  }

  const SearchStudent = () =>{
     
      const found = studentList.filter(student=>student.name == searchstudent)      
      if(found.length>0){
        alert("Student Found")
        setSearchList(found)
      }else{
        alert("Student Not found!")
      }
  }

  const DisplayStudent = () =>{
    settoggle(!toggle)
  }

  return (
    <>
    <div id='main'>
      <form onSubmit={StoreStudent}> 
        <h3>Student Registration</h3>
        <input type='text' placeholder='Enter your Name' value={student} onChange={(e)=> setstudent(e.target.value)}/>
        <input type='text' placeholder='Enter Your age' value={age} onChange={(e)=>setage(e.target.value)}/>
        <input type='text' placeholder='Enter your Department' value={department} onChange={(e)=>setdepartment(e.target.value)}/>
        <button type='submit'>Register</button>
      </form>
      <div className='search'>
        <h3>Search Student</h3>
      <input type='text' onChange={(e)=>setsearchstudent(e.target.value)} placeholder='Enter Name'/>
      <button onClick={SearchStudent}> Search</button>

      {
        searchList.map((value, index)=>{
          return <li key={index}>Name: {value.name} Age: {value.age} Department: {value.department}</li>
        })
      }
      </div>

      <div className='display'>
        <h3>Student List</h3>
      <button onClick={DisplayStudent}>Display Students List</button>

      <ul>
      {toggle && studentList.map((value,index)=>{
        return <li key={index}> Name:{value.name} Age:{value.age} Department:{value.department}</li>
      })}
    </ul>
    </div>
    </div>
    </>
  )
}

export default App