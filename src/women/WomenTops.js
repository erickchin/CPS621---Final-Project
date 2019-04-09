import React, { Component } from 'react';
import video from './videos/WTops.mp4'
import p1 from './images/t-p1.jpg'
import p2 from './images/t-p2.jpg'
import p3 from './images/t-p3.jpg'

class WomenTops extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron-bg jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Women's Top</h1>
            <p className="lead">Soft wardrobe essentials for everyday.</p>
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
              <figcaption class="figure-caption">Short Sleeve Long Shirt CAD $39.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p2} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Linen Blend Long Sleeve CAD $39.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p3} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Linen Blend Long Sleeve CAD $39.90</figcaption>
            </figure>
          </div>
          <br/>
        </div>
      </div>);
  }
}

export default WomenTops;
