import React, { Component } from "react";
import { Route } from "react-router-dom";
import Main from "./Main";
import Navbar from "./Navbar";

class Blog extends Component {
	render() {
		return (
			// <BrowserRouter basename="/my-app">
			<div>
				<Navbar />
				<Route exact path="/" component={Main} />
				{/* <Route exact path="/posts" component={Posts} /> */}

				{/* </div> */}
			</div>
		);
	}
}

export default Blog;
