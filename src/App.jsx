import React  from 'react'

import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'


  

function App() {
   
    const handleScroll = () => {
      let y = window.scrollY;
      document.body.style.backgroundPositionX = (50 - y * 0.05000) + "%";
    }
    window.addEventListener("scroll", handleScroll);
    // تنظيف الحدث لما ينتهي الكومبوننت
    
  return(
  <div>
    <Home />
    <About />
    
    <Skills />
    <Services/>
    <Projects/>
    <Contact />
    <Footer/>
    <Nav/>

  </div >


)
}

export default App
