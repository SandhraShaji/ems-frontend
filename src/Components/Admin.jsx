import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import {Link} from 'react-router-dom'
function Admin() {
  const base_url = 'http://localhost:8000'
  const [allEmp,setAllEmp] = useState([])
  const fetchData=async()=>{
    const result = await axios.get(`${base_url}/get-all-employees`)
    console.log(result.data.employees);
    setAllEmp(result.data.employees)
  }
  useEffect(()=>{
    fetchData()
  },[])

  const DeleteEmployee=async(id)=>{
    const result = await axios.delete(`${base_url}/delete-employee/${id}`)
    alert(result.data.message)
    fetchData()
  }
  return (
    <div>
        <h2 className='text-center mt-5 m-3'>Employee Management System</h2>
        <div className="container">
            <p>Employee management that uses coaching to motivate and build trust with workers can unlock enormous human potential. Yet, communication tactics alone may fall short in the face of multi-generational workforces, rising numbers of freelance workers and complex regulations. Technology, whether it’s workforce management software or a human capital management solution, can often help business leaders maintain productivity more effectively in rapidly changing environments.</p>
            <Link to={'/add'}>
              <a style={{float:'right'}} className='btn btn-info' href="">Add</a>
            </Link>
        </div>

        <div className="container">
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
        <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          allEmp.map(item=>(
            <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.designation}</td>
          <td>{item.salary}</td>
          <td>
            <div className='d-flex justify-content-evenly'>
            <Link to={`/view/${item.id}`}><i class="fa-solid fa-eye text-primary"></i></Link>
            <Link to={`/edit/${item.id}`}><i className='fa-solid fa-pen text-success'></i></Link>
            <i onClick={()=>DeleteEmployee(item.id)} className='fa-solid fa-trash text-danger'></i>
            </div>
          </td>
        </tr>
          ))
        }
      </MDBTableBody>
    </MDBTable>
        </div>
    </div>
  )
}

export default Admin