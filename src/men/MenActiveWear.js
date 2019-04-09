import React, { Component } from 'react';
import video from './videos/MActive.mp4'
import p1 from './images/aw-p1.jpg'
import p2 from './images/aw-p2.jpg'
import p3 from './images/aw-p3.jpg'

class MenActiveWear extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron-bg jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Men's Active Wear</h1>
            <p className="lead">Made to Move. Like You</p>
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
              <figcaption class="figure-caption">Roger Federer Shorts CAD $49.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p2} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Roger Federer Shirt CAD $49.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p3} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Roger Federer Shorts CAD $49.90</figcaption>
            </figure>
           
          </div>
        </div>
        <br/>
      </div>);
  }
}

export default MenActiveWear;
