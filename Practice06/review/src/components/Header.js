import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import HeaderNavBar from './HeaderNavBar';
import HeaderBody from './HeaderBody';

class Header extends Component {
  render() {
    let headerClassName = 'hero is-info';
    headerClassName += (this.props.location.pathname === '/') ? ' is-fullheight' : '';

    return (
      <header className={headerClassName}>
        <div className="hero-head">
          <HeaderNavBar links={this.props.navLinks} />
        </div>

        <div className="hero-body">
          <HeaderBody isHome={(this.props.location.pathname === '/')} />
        </div>
      </header>
    );
  }
}

export default withRouter(props => <Header {...props} />);
