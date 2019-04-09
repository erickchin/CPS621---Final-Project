import React, { Component } from 'react';
import video from './videos/WActiveWear.mp4'

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
            <iframe class="embed-responsive-item" src={video} allowfullscreen></iframe>
          </div>
        </div>
      </div>);
  }
}

export default WomenActiveWear;
