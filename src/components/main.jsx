import React from 'react'
import '../styles/main.css'

const Main = () => {

  return (
    <div className="principal-information">
      <h1 className="title">
        <span className="text"> Hola,</span>
        <span className="text">  mi nombre es </span>
        <span className="second-text name"> Gerardo </span>
        <span className="text"> y soy</span>
        <span className="second-text"> Desarrollador Web </span>
      </h1>
      <div className="scroll-down">
        <i className="fas fa-long-arrow-alt-down arrow-down"></i>
      </div>
    </div>
  )
}

export default Main