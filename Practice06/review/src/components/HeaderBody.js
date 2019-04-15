import React, { Component } from 'react';

import "./HeaderBody.scss"
import image from './image.json';

class Author extends Component {
  constructor(props) {
    super(props);
    this.avatar = image.avatar;
  }
  render() {
    return (
      <div>
        {
          (this.props.isHome === true) ?
            (
              <div className="profile">
                <div className="photo">
                  <img alt="" src={this.avatar} />
                </div>
                <div className="content">
                  <div className="text">
                    <h1>WooLNinesun</h1>
                    <h4>Front-end Web Designer</h4>
                  </div>
                </div>
              </div>
            ) : (
              <div className="container has-text-centered">
                <h1 className="title">WooLNinesun</h1>
                <h2 className="subtitle">咀嚼知識的羊</h2>
              </div>
            )
        }
      </div>
    );
  }
}

export default Author;
