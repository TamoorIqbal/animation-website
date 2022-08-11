import React from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';
export const Header = () => {
  return (
    <div>

      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand m-auto" href="#">Gamica Cloud</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Gamica Cloud</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
               
                <li className="nav-item">
                  <Link to='/services' className="nav-link">Services</Link>
                </li>
               
                <li className="nav-item">
                  <Link to='/aboutUs' className="nav-link">AboutUs</Link>
                </li>
               
                <li className="nav-item">
                  <Link to='/ourSpeciality' className="nav-link">OurSpeciality</Link>
                </li>

              </ul>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
