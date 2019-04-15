import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.links = this.props.links.filter(link => (link.name !== '') ? true : false);
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-menu navbar-end">
            {this.links.map((link, index) =>
              <NavLink key={index} exact to={link.to}
                className="navbar-item" activeClassName="is-active"
              >{link.name}</NavLink>)}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
