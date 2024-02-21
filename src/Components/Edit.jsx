import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

function Edit() {
  //to hold all input field data
  const [empid,setId] = useState("")
  const [empname,setName] = useState("")
  const [empage,setAge] = useState("")
  const [empdesignation,setDesignation] = useState("")
  const [empsalary,setSalary] = useState("")
  const base_url = 'http://localhost:8000'

  const {id} = useParams();
  console.log(id);

  const fetchData=async(id)=>{
    const result = await axios.get(`${base_url}/view-employee/${id}`)
    console.log(result);
    setId(result.data.employee.id)
    setName(result.data.employee.name)
    setAge(result.data.employee.age)
    setDesignation(result.data.employee.designation)
    setSalary(result.data.employee.salary)
  }
  useEffect(()=>{
    fetchData(id)
  },[])

  const location = useNavigate()
  //update employee function call
  const updateEmployee=async(e)=>{
    e.preventDefault()
    const body={
      id:empid,
      name:empname,
      age:empage,
      designation:empdesignation,
      salary:empsalary
    }
    const result = await axios.post(`${base_url}/update-employee/${id}`,body)
    console.log(result);
    alert(result.data.message)
    location('/')
  }
  return (
      <div className='container text-center my-4 px-5'>
      <h2 className='my-4'>Update Employee Details</h2>
      <form className='mx-5 px-5'>
      <MDBInput onChange={(e)=>setId(e.target.value)} value={empid} label='Id' id='formControlDefault' type='text' />
      <br />  
      <MDBInput onChange={(e)=>setName(e.target.value)} value={empname} label='Name' id='formControlDefault' type='text' />
      <br />      
      <MDBInput onChange={(e)=>setAge(e.target.value)} value={empage} label='Age' id='formControlDefault' type='text' />
      <br />      
      <MDBInput onChange={(e)=>setDesignation(e.target.value)} value={empdesignation} label='Designation' id='formControlDefault' type='text' />
      <br />      
      <MDBInput onChange={(e)=>setSalary(e.target.value)} value={empsalary} label='Salary' id='formControlDefault' type='text' />
      <br />
      <MDBBtn onClick={(e)=>updateEmployee(e)}>
        Update
      </MDBBtn>
      </form>
    </div>
  )
}

export default Edit