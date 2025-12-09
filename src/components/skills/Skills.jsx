import React from 'react'
import './skills.css'
import Css1 from '../../assets/css3.svg'
import Js from '../../assets/javascript.svg'
import Html from '../../assets/html.png'
import Bootstrap from '../../assets/bootstrap.png'
import React3 from '../../assets/react.svg'

const SkillsData=[
  {
    id: 1,
    image: Css1,
    title: 'CSS',
    dics: 'User Interface'
  },
  {
    id: 2,
    image: Js,
    title: 'JavaScript',
    dics: 'Interaction'
  }
  , {
    id: 3,
    image: Html,
    title: 'Html',
    dics: 'Structure'
  },
  {
    id: 4,
    image: React3,
    title: 'React',
    dics: 'Framework'
  }
  ,
  {
    id: 5,
    image: Bootstrap,
    title: 'Bootstrap',
    dics: 'framework'
  }
]



function Skills() {

  return (
    <section className='skills' id='skills'>
      <div className="top_section">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>
      <div className="container container_skills">

        {SkillsData.map(({ id, image, title, dics }) => {
          return(
            <article key={id} className="card_skills" >
            <div className="icon">
              <img src={image} />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className='text_light'>{dics}</p>
            </div>
          </article>

          )})}


      </div>
    </section>
  )
}

export default Skills