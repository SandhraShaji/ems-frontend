import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import './Header.css'
function Header() {
  return (
    <div><MDBNavbar light className='Navbar'>
    <MDBContainer fluid>
      <MDBNavbarBrand style={{color:'white'}} href='/'>
      <i class="fa-solid fa-users m-2"></i>
        EMS
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header