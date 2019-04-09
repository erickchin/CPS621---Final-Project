import React, { Component } from 'react';
import p1 from './images/b-p1.jpg'
import p2 from './images/b-p2.jpg'
import p3 from './images/b-p3.jpg'

class WomenBottoms extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron-bg jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Women's Bottoms</h1>
            <p className="lead">Versatile and smart pants in variety of fabrics.</p>
          </div>
        </div>
        <div className="container">
          <div class="embed-responsive embed-responsive-21by9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/oyTpgCucg7c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <br />
          <h2>Product Preview</h2>
          <br />
          <div className="text-center">
            <figure class="figure">
              <img src={p1} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Extra Stretch Jeans CAD $49.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p2} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Front Button Skirt CAD $29.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p3} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Smart Shorts CAD $29.90</figcaption>
            </figure>
          </div>
        </div>
        <br/>
      </div>);
  }
}

export default WomenBottoms;
