import React, { Component } from 'react';
import './index.scss';

class NotFound extends Component {

  render() {
    return (
      <div>
        <div className="top">
          <h1 className="no">404 Not Found</h1>
        </div>
        <div className="ghost-container">
          <div className="ghost-copy">
            <div className="ghost-one"></div>
            <div className="ghost-two"></div>
            <div className="ghost-three"></div>
            <div className="ghost-four"></div>
          </div>
          <div className="ghost">
            <div className="ghost-face">
              <div className="ghost-eye"></div>
              <div className="ghost-eye-right"></div>
              <div className="ghost-mouth"></div>
            </div>
          </div>
          <div className="ghost-shadow"></div>
        </div>
      </div>
    );
  }
}

export default NotFound;
