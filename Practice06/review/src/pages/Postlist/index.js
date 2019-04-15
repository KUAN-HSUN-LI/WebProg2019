import React, { Component } from 'react';
import PostListItem from './PostListItem';

import './index.scss';
import postDatas from '../../containers/posts.json';

class PostList extends Component {
  render() {
    return (
      <section className="container">
        {postDatas.map((postData, index) =>
          <PostListItem key={index} postId={index} {...postData}></PostListItem>
        )}
      </section>
    );
  }
}

export default PostList;
