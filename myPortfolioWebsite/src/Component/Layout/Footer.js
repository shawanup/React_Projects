import React from 'react'
import './Footer.css'
import { BsSuitHeartFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className='footer'>
          <small>Created By <a href='#'>Anup Shaw</a> |<span className='fa fa-copyright'> &copy; </span>2023 All rights reserved</small><br />
      <small>Thank you for visiting my portfolio website <span><BsSuitHeartFill className='heart_icon'/></span></small>
    </footer>
  )
}

export default Footer
