import React, { Component, Fragment } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Posts from "./Posts/Posts";

export default class Navbar extends Component {
	render() {
		return (
			<Fragment>
				<nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top container">
					{/* <div className=""> */}
					<div className="navbar-header page-scroll">
						<a className="navbar-brand page-scroll" href="#page-top">
							Top
						</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<NavLink to="/home">Home</NavLink>
							</li>
							<li>
								<NavLink to="/posts">Article</NavLink>
							</li>
							<li>
								<a className="page-scroll" href="#services">
									Services
								</a>
							</li>
							{/* {index.map(e => (
							<li key={e}>
								<a className="page-scroll" href="#services">
									{e}
								</a>
							</li>
						))} */}
						</ul>
					</div>
					{/* </div> */}
				</nav>
				<Switch>
					<Route exact path="/posts/:id?" component={Posts} />
					{/* <Route path="/posts/:id?" component={PostRender} /> */}
					<Redirect from="/home" to="/" />
				</Switch>
			</Fragment>
		);
	}
}
