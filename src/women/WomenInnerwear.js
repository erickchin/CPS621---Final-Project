import React, { Component } from 'react';
import video from './videos/WInnerwear.mp4'

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
        </div>
      </div>);
  }
}

export default WomenInnerwear;
