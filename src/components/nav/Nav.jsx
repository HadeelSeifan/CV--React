import React ,{useState} from 'react'
import './nav.css'
import { IoHomeOutline } from 'react-icons/io5'
import { LuUserRound } from 'react-icons/lu'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageAltDetail } from 'react-icons/bi'


function Nav() {
  const [active, setactive] = useState("#")

  return (
   <nav>
    <a href='#' className={active==="#"?"active" :""} onClick={()=>{setactive('#')}}><IoHomeOutline/></a>
    <a href='#about' className={active==="#about"?"active" :""} onClick={()=>{setactive("#about")}}><LuUserRound/></a>
    <a href='#services' className={active==="#services"?"active" :""} onClick={()=>{setactive('#services')}}><BiBook/></a>
    <a href='#projects'className={active==="#projects"?"active" :""} onClick={()=>{setactive('#projects')}}><RiServiceLine/></a>
    <a href='#contact' className={active==="#contact"?"active" :""} onClick={()=>{setactive('#contact')}}><BiMessageAltDetail/></a>
   </nav>
  )
}

export default Nav