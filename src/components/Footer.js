import React from 'react'
import '../styles/footerstyles.css'

const Footer = () => {
  return (
    <div style={{backgroundColor:'#000',height:'5rem',
     color:'#fff',display:'flex',alignItems:'center',
     justifyContent:'space-around',
     position:'absolute',
     bottom:'0',
     left:'0',
     right:'0'
     }}>
      <div className="footer-items">
        <h4>Our location</h4>
        <p>Kolkata, India</p>
      </div>
      <div className="footer-items">
        <h4>Phone</h4>
        <p>+91-7003165530</p>
      </div>
      <div className="footer-items">
        <h4>Email</h4>
        <p>anirbanghoshani27032gmail.com</p>
      </div>
    </div>
  )
}

export default Footer
