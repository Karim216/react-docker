import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className="header-nav">
        <Link to="/accueil">Logo</Link>
        <a href="#">Inscrivez-vous</a>
        {/* <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="#">Accueil</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Actualité</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Kiosque</a>
            </li>
        </ul> */}
    </nav>
  )
}

export default Header