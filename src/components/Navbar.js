import React from 'react'
import '../styles/navbarstyles.css';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <div className='navbar-comp'>
        <div className="logo">
            <i><DirectionsCarIcon fontSize='30px'/></i>
            <h3>Tesla</h3>
        </div>
        <div className="navbar-items">
            <p>Home</p>
            <p>Features</p>
            <p>Price</p>
            <p>Contact</p>
            <Button variant="contained" className='navbar-btn'>Book Appointment</Button>
        </div>
      
    </div>
  )
}

export default Navbar
