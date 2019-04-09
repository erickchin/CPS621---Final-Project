import React, { Component } from 'react';
import p1 from './images/k-p1.jpg'
import p2 from './images/k-p2.jpg'
import p3 from './images/k-p3.jpg'

class Kids extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron-bg jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Kids and babies</h1>
            <p className="lead">Simple apparel.</p>
          </div>
        </div>
        <div className="container">
          <div class="embed-responsive embed-responsive-21by9">
            <iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/BpvBjA5oZQY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <br/>
          <h2>Product Preview</h2>
          <br/>
          <div className="text-center">
            <figure class="figure">
              <img src={p1} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Kids Airism Hoodie CAD $19.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p2} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Kids Dry Stretch Hoodie CAD $29.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p3} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Dry Stretch Hoodie CAD $29.90</figcaption>
            </figure>
          </div>
          <br/>
        </div>
      </div>);
  }
}

export default Kids;
