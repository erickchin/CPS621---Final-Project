import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.png'

class Navigation extends Component {
  render() {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand nav-title"><Link to='/'>
          <img src={logo} width="30" height="30" className="d-inline-block align-top nav-img" alt="" />
          UNIQLO</Link>
        </a>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle  nav-options" href="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Men</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item"><Link to='/men/tops'>Dress Shirts and Formal Wear</Link></a>
                <a className="dropdown-item"><Link to='/men/ut'>UT</Link></a>
                <a className="dropdown-item"><Link to='/men/active-wear'>Active Wear</Link></a>
                <a className="dropdown-item"><Link to='/men/pants'>Pants/Bottoms</Link></a>
                <a className="dropdown-item"><Link to='/men/inner-wear'>Innerwear</Link></a>
              </div>
            </li>
            <li className="nav-item dropdown active">
              <a className="nav-link dropdown-toggle nav-options" href="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Women</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item"><Link to='/women/tops'>Blouses and Tops</Link></a>
                <a className="dropdown-item"><Link to='/women/ut'>UT</Link></a>
                <a className="dropdown-item"><Link to='/women/active-wear'>Active Wear</Link></a>
                <a className="dropdown-item"><Link to='/women/pants'>Pants/Bottoms</Link></a>
                <a className="dropdown-item"><Link to='/women/inner-wear'>Innerwear</Link></a>
              </div>
            </li>
            <li className="nav-item active nav-options">
              <a className="nav-link" href="#"><Link to='/kids'>Kids</Link> <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active nav-options">
              <a className="nav-link" href=""><Link to='/credits'>Credits</Link></a>
            </li>
          </ul>
        </div>
      </nav>
      );
  }
}

export default Navigation;
