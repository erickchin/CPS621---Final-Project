import React, { Component } from 'react';
import video from './videos/WUT.mp4'

class Women extends Component {
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
        </div>
      </div>);
  }
}

export default Women;
