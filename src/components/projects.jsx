import React from 'react'
import '../styles/projects.css'
import netflix from '../images/netflix.svg'
import countries from '../images/countries.svg'
import gifs from '../images/gifs.svg'
import Project from './project'


const Projects = () => {
  return (
    <div className="container-projects p-section">
      <h2 className="subtitle">
        Proyectos
      </h2>
      <p className="information">
        Estos son algunos de mis proyectos personales.
        Si te interesa conocer mas de mis proyectos, te invito a conocer mi <a href="https://github.com/GeraCV" className="t-git"> <strong> Github </strong> </a> .
      </p>
      <div className="container-grid-projects">
        <Project
          src={countries} title={"countries"}
          rp={"https://countries-react-geracv.vercel.app/"}
          rc={"https://github.com/GeraCV/app-of-countries-react"}
        />
        <Project
          src={netflix} title={"netflix"}
          rp={"https://netfllix.vercel.app/"}
          rc="https://github.com/GeraCV/main-page-netflix"
        />
        <Project
          src={gifs} title={"gifs"}
          rp={"https://giffs-geracv.vercel.app/"}
          rc={"https://github.com/GeraCV/app-gifs"}
        />
      </div>
    </div>

  )
}

export default Projects