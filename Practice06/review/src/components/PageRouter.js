import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

class PageRouter extends Component {
  render() {
    return (
      <Switch>
        {this.props.routerLinks.map((link, index) =>
          <Route key={index} exact path={link.to} component={link.component} />
        )}
      </Switch>
    );
  }
}

export default PageRouter;
