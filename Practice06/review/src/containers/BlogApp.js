import React, { Component } from 'react';

import 'bulma';
import './BlogApp.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';
import PageRouter from '../components/PageRouter';

import PostList from '../pages/Postlist';
import Post from '../pages/Post';
import NoFound from '../pages/NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.routerLinks = [{
      name: 'Home', to: '/', component: null,
    }, {
      name: 'Posts', to: '/posts', component: PostList,
    }, {
      name: '', to: '/post/:id', component: Post,
    }, {
      name: '', to: '*', component: NoFound,
    }];

    this.navLinks = this.routerLinks.map(link => ({ name: link.name, to: link.to }));
  }

  render() {
    return (
      <div className="blog-container">
        <Header navLinks={this.navLinks} />
        <PageRouter routerLinks={this.routerLinks} />
        <Footer />
      </div>
    );
  }
}

export default App;
