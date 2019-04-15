import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import postDatas from '../../containers/posts.json';

class Post extends Component {
  render() {
    const postId = parseInt(this.props.match.params.id);
    if (postId < 0 || postId > 2) {
      return (<Redirect to="/notfound" />);
    }
    return (
      <section className="container">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <div className="title">{postDatas[postId].title}</div>
              <div className="is-pulled-right time">{postDatas[postId].time}</div>
              <div className="subtitle">{postDatas[postId].subtitle}</div>
              <hr />
              <p>{postDatas[postId].context}</p>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default Post;
