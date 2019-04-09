import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import carousel1 from './img/carousel1.jpg';
import carousel2 from './img/carousel2.jpg';
import carousel3 from './img/carousel3.jpg';
import mens from './img/mens.jpg';
import womens from './img/womens.jpg';
import kids from './img/kids.jpg';
import store1 from './img/store1.JPG';
import store2 from './img/store2.JPG';
import store3 from './img/store3.JPG';

class Home extends Component {
  render() {
    return (
      <div>

        <div className="container">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 carousel-img" src={carousel1} alt="Header 1" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 carousel-img" src={carousel2} alt="Header 2" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 carousel-img" src={carousel3} alt="Header 3" />
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <h1>Categories</h1>
          <br/>
          <div className="card-deck">
            <div className="card">
              <div className="text-center"><img src={mens} className="card-img-top card-img" alt="..." /></div>
              <div className="card-body">
                <h5 className="card-title">Men's Clothing</h5>
                <p className="card-text">An essential part of every man's wardrobe made from 100% cotton.</p>
                <a href="#" className="btn btn-primary nav-options"><Link to='/men/tops'>View Mens</Link></a>
              </div>
            </div>


            <div className="card">
              <div className="text-center"><img src={womens} className="card-img-top card-img" alt="..." /></div>

              <div className="card-body">
                <h5 className="card-title">Women's Clothing</h5>
                <p className="card-text">Modern classic that's always in style, made with extra-fine cotton</p>
                <a href="#" className="btn btn-primary nav-options"><Link to='/women/tops'>View Womens</Link></a>
              </div>
            </div>


            <div className="card">
              <div className="text-center"><img src={kids} className="card-img-top card-img" alt="..." /></div>
              <div className="card-body">
                <h5 className="card-title">Kid's Section</h5>
                <p className="card-text">Affordable and comfortable apparel that perfect for play.</p>
                <a href="#" className="btn btn-primary nav-options"><Link to='/kids'>View Kids</Link></a>
              </div>
            </div>

          </div>
          <h1>Our Store</h1>
          <div id="ourStore" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100 carousel-img-store" src={store1} alt="Header 1" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 carousel-img-store" src={store2} alt="Header 2" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100 carousel-img-store" src={store3} alt="Header 3" />
              </div>
              <a className="carousel-control-prev" href="#ourStore" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#ourStore" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
