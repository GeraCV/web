import React from 'react'
import '../styles/about.css'

const AboutMe = () => {
  return (
    <div className="aboutme p-section">
      <div className="section-information">
        <h2 className="subtitle">
          Más sobre mi?
      </h2>
        <p className="information">
          Mis inicios fueron bastante normales,
          la curiosidad de querer saber que hay detrás
          y cómo se crea lo que observamos en la web.
          Esa simple curiosidad me llevó a donde estoy ahorita,
          tener mas de un año trabajando en proyectos personales,
          aprendiendo mas tecnologías y querer dedicarme a esto.
          Aunque estoy enfocado en la parte del front end,
          también tengo conocimientos en el back end.
      </p>
      </div>
      <div className="section-skills">
        <p className="information skills">
          Algunas de mis habilidades :
      </p>
        <ul className="l-skills">
          <li className="n-skill"> JavaScript </li>
          <li className="n-skill"> ReactJS </li>
          <li className="n-skill"> Redux </li>
          <li className="n-skill"> PHP </li>
          <li className="n-skill"> SQL </li>
          <li className="n-skill"> MySQL </li>
          <li className="n-skill"> TypeScript </li>
          <li className="n-skill"> HTML </li>
          <li className="n-skill"> CSS </li>
          <li className="n-skill"> Git </li>
          <li className="n-skill"> NPM </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe