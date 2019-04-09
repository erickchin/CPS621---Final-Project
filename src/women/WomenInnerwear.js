import React, { Component } from 'react';
import video from './videos/WInnerwear.mp4'
import p1 from './images/i-p1.jpg'
import p2 from './images/i-p2.jpg'
import p3 from './images/i-p3.jpg'

class WomenInnerwear extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron-bg jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Women's Innerwear</h1>
            <p className="lead">Comfortable from the inside out, our innerwear is the perfect foundation for every day.</p>
          </div>
        </div>
        <div className="container">
          <div class="embed-responsive embed-responsive-21by9">
            <iframe class="embed-responsive-item" src={video} allowfullscreen></iframe>
          </div>
          <br/>
        <h2>Product Preview</h2>
          <br/>
          <div className="text-center">
            <figure class="figure">
              <img src={p1} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Airism Padded $9.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p2} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Airism Scoop Neck CAD $9.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p3} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Airism Heather Camisole CAD $9.90</figcaption>
            </figure>
            
          </div>
        </div>
        <br/>
      </div>);
  }
}

export default WomenInnerwear;
