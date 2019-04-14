import React from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Posts from "./Posts/Posts";
<<<<<<< HEAD

=======
import Blog from "./Main";
>>>>>>> da78fafe36b174775a68f1b980312413f75c8c10
export default () => {
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
