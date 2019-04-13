import React from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Posts from "./Posts/Posts";
import Blog from "./Blog";
export default () => {
	console.log(Posts);
	return (
		<div>
			<header>
				<div className="container">
					<div className="intro-text">
						<div className="intro-lead-in">Welcome To Our Studio!</div>
						<div className="intro-heading">It's Nice To Meet You</div>
						<NavLink className="btn btn-xl" to="/posts">
							View Article
						</NavLink>
					</div>
				</div>
			</header>
			<Switch>
				{/* <Route exact path="/" component={Blog} /> */}
				<Route exact path="/posts" component={Posts} />
				<Redirect from="/home" to="/" />
			</Switch>
		</div>
	);
};
