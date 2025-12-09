import React from 'react'
import './projects.css'
import Prof1 from '../../assets/profil1.png'
import Prof2 from '../../assets/profil2.png'
import Prof3 from '../../assets/profil3.png'
import Prof4 from '../../assets/profil4.png'
import Prof5 from '../../assets/profil5.png'
import Prof6 from '../../assets/profil6.png'
function Projects() {
  const Projectsdata = [
    {
      id: 1,
      image: Prof1 ,
      tittle: 'Protfolio Item 1',
      github: 'https://hadeelseifan.github.io/bootstrap/boo.html'
    },
    {
      id: 2,
      image: Prof2,
      tittle: 'Protfolio Item 2',
      github: 'https://hadeelseifan.github.io/blessed/had.html'
    },
    {
      id: 3,
      image: Prof3 ,
      tittle: 'Protfolio Item 3',
      github: 'https://hadeelseifan.github.io/Speed-internet/inter.html'
    },
    {
      id: 4,
      image:  Prof4 ,
      tittle: 'Protfolio Item 4',
      github: 'https://hadeelseifan.github.io/training/gro.html'
    },
    {
      id: 5,
      image:  Prof5 ,
      tittle: 'Protolio Item 5',
      github: 'https://hadeelseifan.github.io/Learning-js/coo.html'
    },
     {
      id: 6,
      image:  Prof6 ,
      tittle: 'Protolio Item 6',
      github: 'https://hadeelseifan.github.io/Host/host.html'
    }
  ]
  return (
    <section className='projects'id='projects'>
      <div className="top_section">
        <h5>What Projects I Have</h5>
        <h2>My Projects</h2>
      </div>
      <div className="container projects_container">
        {Projectsdata.map(({id,image,tittle,github }) => {
          return (
            <article key={id} className="portfolio_item" >
              <div className="portfolio_item_img">
                <img src={image} />
              </div>
              <h3>{tittle}</h3>
              <div className="protfolio_item_btns">
                <a href={github} className='btn btn-primary' target='_blank'>Github</a>

              </div>
            </article>
          )
        })}



      </div>
    </section>
  )
}

export default Projects