import React from 'react'
import './footer.css'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
function Footer() {
  return (
    <footer>
      <a href='#' className='footer_logo'>Hadeel</a>
      <ul className='links'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href='https://www.facebook.com/HadeelSeifan' target='_blank'><FaFacebook /></a>
        <a href='https://www.instagram.com/hadeelamer_10' target='_blank'><FaInstagram /></a>
        <a href='https://twitter.com/HadeelAmer' target='_blank'><FaTwitter /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; <a>Hadeel</a> All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer