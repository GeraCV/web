import React from 'react'
import '../styles/header.css'
import logo from '../images/logo.svg'

const Header = () => {
  return (
    <header className="main-header">
      <img className="logo" src={logo} alt="logo" />
    </header>
  )
}

export default Header