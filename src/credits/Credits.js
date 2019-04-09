import React, { Component } from 'react';

class Credits extends Component {
  render() {
    return (
      <div>
      <div className="jumbotron-bg jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Credits</h1>
            <p className="lead">Project group members and resources used</p>
          </div>
        </div>
      <div className="container">
        
        <h2>Group Members</h2>
        <ul className="list-group">
          <li className="list-group-item">Erick Chin</li>
          <li className="list-group-item">Louise Marquez</li>
        </ul>
        <br/>
        <h2>Resources/Tools</h2>
        <ul className="list-group">
          <li className="list-group-item">React</li>
          <li className="list-group-item">React Router</li>
          <li className="list-group-item">Javascript</li>
          <li className="list-group-item">Uniqlo.com</li>
        </ul>
      </div></div>);
  }
}

export default Credits;
