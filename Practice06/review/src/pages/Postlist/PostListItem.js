import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PostListItem extends Component {
  render() {
    let tags = this.props.tags.split(' ');
    tags = tags.map((tag, index) => <span key={index} className="tag">{tag}</span>);

    return (
      <article className="media">
        <div className="media-content">
          <div className="content">
            <div className="title">
              <NavLink to={`/post/${this.props.postId}`}>{this.props.title}</NavLink>
            </div>
            <div className="is-pulled-right time">{this.props.time}</div>
            <div className="subtitle">{this.props.subtitle}</div>
            <hr />
            <p className="ellipsis">{this.props.context}</p>
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <p><strong>Labels:</strong> {tags} </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default PostListItem;
