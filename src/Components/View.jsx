import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MDBCard, MDBListGroup, MDBListGroupItem,MDBCardBody,MDBCardTitle,MDBRow,MDBCol } from 'mdb-react-ui-kit';
function View() {
  const base_url = 'http://localhost:8000/view-employee'
  const [details,setDetails]= useState({})
  const {id} = useParams()
  const fetchData=async()=>{
    const result = await axios.get(`${base_url}/${id}`)
    setDetails(result.data.employee)
    console.log(details);
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
        <MDBRow className='text-center'>
          <MDBCol className='my-5 ms-5 text-center'>
            <img width={'280px'} src="https://lordicon.com/icons/wired/lineal/21-avatar.gif" alt="" />
          </MDBCol>
          <MDBCol>
          <MDBCard className='my-5 me-5 text-center'>
        <MDBCardBody>
        <MDBCardTitle>Employee Details</MDBCardTitle>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Id: {details.id}</MDBListGroupItem>
        <MDBListGroupItem>Name: {details.name}</MDBListGroupItem>
        <MDBListGroupItem>Age: {details.age}</MDBListGroupItem>
        <MDBListGroupItem>Designation: {details.designation}</MDBListGroupItem>
        <MDBListGroupItem>Salary: {details.salary}</MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
          </MDBCol>
          <Link to={'/'}>
        <a className='btn btn-info mb-3' href="">Back to Home</a>
        </Link>
        </MDBRow>

    </div>
  )
}

export default View