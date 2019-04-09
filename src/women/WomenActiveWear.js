import React, { Component } from 'react';
import p1 from './images/aw-p1.jpg'
import p2 from './images/aw-p2.jpg'
import p3 from './images/aw-p3.jpg'
import p4 from './images/aw-p4.jpg'
import p5 from './images/aw-p5.jpg'
import p6 from './images/aw-p6.jpg'


class WomenActiveWear extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron-bg jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Women's Active Wear</h1>
            <p className="lead">Made to Move. Like You</p>
          </div>
        </div>
        <div className="container">
          <div class="embed-responsive embed-responsive-21by9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/iWHD5hHGIk4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <br/>
          <h2>Product Preview</h2>
          <br/>
          <div className="text-center">
            <figure class="figure">
              <img src={p1} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Airism Seamless V Neck CAD $19.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p2} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Wireless Bra (Active) CAD $29.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p3} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Wireless Bra (Active) CAD $29.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p4} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Dry-Ex Printed Crew CAD $19.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p5} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Airism Printed Leggings CAD $29.90</figcaption>
            </figure>
            <figure class="figure">
              <img src={p6} class="rounded clothes-obj" alt="..." />
              <figcaption class="figure-caption">Airism Soft Leggings CAD $29.90</figcaption>
            </figure>
          </div>
          <br/>
        </div>
      </div>);
  }
}

export default WomenActiveWear;
