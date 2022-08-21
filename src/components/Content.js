import React from 'react'
import Navbar from './Navbar'
import Button from '@mui/material/Button';
import '../styles/contentstyles.css'

const Content = () => {
  return (
    <div style={{ height:'87vh',width:'80vw',margin:'0 auto'}}>
      <Navbar />
      <div className="content-items">
       
        <h1>Your Tesla Cars Repair</h1>
        <p>Visit Us for Your Service</p>
        <Button variant="contained">Book Appointmnet</Button>
        
      </div>
    </div>
  )
}

export default Content
