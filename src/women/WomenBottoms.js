import React, { Component } from 'react';
import video from './videos/WPants.mp4'

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
            <iframe class="embed-responsive-item" src={video} allowfullscreen></iframe>
          </div>
        </div>
      </div>);
  }
}

export default WomenBottoms;
