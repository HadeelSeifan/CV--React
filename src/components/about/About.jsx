import React from 'react'
import './about.css'
import Me from '../../assets/me (1).png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
function About() {
  return (
    <section className='about' id='about'>
      <div className="top_section">
        <h5>Get to know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Me} />
          </div>

        </div>
        <div className="about_contant">
          <div className="about_cards">

            <div className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>2
                + years training
              </small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </div>
          </div>

          <p>Front-End Development Experience
            I have developed a wide range of front-end projects as part of my applied training and
            continuous learning. Through a professional Front-End Development course, I gained strong
            practical experience in HTML, CSS, JavaScript, and Bootstrap, building responsive and userfocused interfaces.
            Currently, I am enhancing my technical skills by learning React.js and converting my
            previous projects into React-based applications. </p>
          <a href='#contact' className='btn btn-primary'>Lets talk</a>
        </div>
      </div>
    </section>
  )
}

export default About