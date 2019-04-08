import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
          <Link to='/'>Bootstrap</Link>
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item dropdown active">
              <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Link to='/men'>Men</Link></a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Dress Shirts/Formal Wear</a>
                <a class="dropdown-item" href="#">UT</a>
                <a class="dropdown-item" href="#">Active Wear</a>
                <a class="dropdown-item" href="#">Pants/Bottoms</a>
                <a class="dropdown-item" href="#">Inner Wear</a>
              </div>
            </li>
            <li class="nav-item dropdown active">
              <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <Link to='/women'>Women</Link></a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Blouses and Tops</a>
                <a class="dropdown-item" href="#">UT</a>
                <a class="dropdown-item" href="#">Active Wear</a>
                <a class="dropdown-item" href="#">Pants/Bottoms</a>
                <a class="dropdown-item" href="#">Innerwear</a>
              </div>
            </li>
            <li class="nav-item dropdown active">
              <a class="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <Link to='/kids'>Kids</Link></a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Jackets</a>
                <a class="dropdown-item" href="#">Tops/Shirts</a>
                <a class="dropdown-item" href="#">Bottoms</a>
                <a class="dropdown-item" href="#">Innerwear</a>
              </div>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href=""><Link to='/credits'>Credits</Link></a>
            </li>
          </ul>
        </div>
      </nav>);
  }
}

export default Navigation;
