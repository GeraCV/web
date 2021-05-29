import React from 'react'

const Project = ({ src, title, rp, rc }) => {
  return (
    <div className="container-project">
      <div className="container-image">
        <img className="image-project" src={src} alt={title} />
      </div>
      <div className="container-buttons">
        <div className="buttons">
        <a href={rp} className="link"> Ver proyecto </a>
        <a href={rc} className="link"> Ver código </a>
        </div>
      </div>
    </div>
  )
}

export default Project