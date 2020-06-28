import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              Browse Movies
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-5x" id="imdb-logo" />
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fas fa-video fa-5x" />
            </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
