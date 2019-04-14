import React, { Component } from "react";
<<<<<<< HEAD
import { Route } from "react-router-dom";
import Main from "./Main";
import Navbar from "./Navbar";
=======
import { Switch, Route } from "react-router-dom";
import Posts from "./Posts/Posts";
import Main from "./Main";
>>>>>>> da78fafe36b174775a68f1b980312413f75c8c10

class Blog extends Component {
	render() {
		return (
			// <BrowserRouter basename="/my-app">
<<<<<<< HEAD
			<div>
				<Navbar />
				<Route exact path="/" component={Main} />
				{/* <Route exact path="/posts" component={Posts} /> */}

				{/* </div> */}
			</div>
=======
			<Switch>
				{/* <div className="App"> */}
				<Route exact path="/" component={Main} />
				<Route exact path="/posts" component={Posts} />
				{/* </div> */}
			</Switch>
>>>>>>> da78fafe36b174775a68f1b980312413f75c8c10
		);
	}
}

export default Blog;
