import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Add() {
  //to hold all input field data
  const [id,setId] = useState("")
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [designation,setDesignation] = useState("")
  const [salary,setSalary] = useState("")
  const base_url = 'http://localhost:8000/add-employee'

  const location = useNavigate()

  const AddEmployee=(e)=>{
    e.preventDefault() //to prevent refresh on button click
    console.log(id,name,age,designation,salary);
    const body={
      id,name,age,designation,salary
    }
    const result = axios.post(base_url,body).then((response)=>{
      alert(response.data.message)
      location('/') //redirect to home page
    })
    .catch((error)=>{
      alert("Please enter a unique id!")
    })
  }
  return (
    <div className='container text-center my-4 px-5'>
      <h2 className='my-4'>Add Employee Details</h2>
      <form className='mx-5 px-5'>
      <MDBInput onChange={(e)=>setId(e.target.value)} label='Id' id='formControlDefault' type='text' />
      <br />      
      <MDBInput onChange={(e)=>setName(e.target.value)} label='Name' id='formControlDefault' type='text' />
      <br />      
      <MDBInput onChange={(e)=>setAge(e.target.value)} label='Age' id='formControlDefault' type='text' />
      <br />      
      <MDBInput onChange={(e)=>setDesignation(e.target.value)} label='Designation' id='formControlDefault' type='text' />
      <br />      
      <MDBInput onChange={(e)=>setSalary(e.target.value)} label='Salary' id='formControlDefault' type='text' />
      <br />
      <MDBBtn onClick={(e)=>AddEmployee(e)}>
        Add
      </MDBBtn>
      </form>
    </div>
  )
}

export default Add