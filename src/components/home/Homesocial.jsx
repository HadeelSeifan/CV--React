import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Homesocial() {
  return (
    <div className='home-socials'>
        <a href='https://www.linkedin.com/in/hadeel-abo-seifan-185106397' target='_blank' ><FaLinkedin/></a>
         <a href='https://github.com/HadeelSeifan' target='_blank' ><FaGithub/></a>
    </div>
  )
}

export default Homesocial