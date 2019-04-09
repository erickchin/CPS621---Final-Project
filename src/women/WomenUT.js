import React, { Component } from 'react';
import video from './videos/WUT.mp4'
import p1 from './images/ut-p1.jpg'
import p2 from './images/ut-p2.jpg'
import p3 from './images/ut-p3.jpg'

class WomenUT extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron-bg jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Women's UT</h1>
            <p className="lead">Graphics and creativity.</p>
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
              <figcaption class="figure-caption">Mickey Blue Shirt CAD $14.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p2} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Mickey Blue Shirt CAD $14.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p3} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Mickey Blue Shirt CAD $14.90</figcaption>
            </figure>
           
          </div>
        </div>
        
      </div>);
  }
}

export default WomenUT;
