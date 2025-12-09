import React from 'react'
import './home.css'
import Me from '../../assets/me (1).png'
import Cv from '../../assets/CV.pdf'
import Homesocial from './Homesocial'

function Home() {
  return (
    <div className='home'>
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Hadeel A. Seifan</h1>
        <h4 className='text-light'>Frontend Developer</h4>

        <div className="btns">
          <a href={Cv} className='btn' download>Download CV</a>
          <a href='#' className='btn btn-primary'>let's talk</a>

        </div>
        <div className="me">
          <img src={Me} />
        </div>
        <a href='#about' className='scroll_down'> Scroll down</a>

        <Homesocial />
      </div>





    </div>
  )
}

export default Home