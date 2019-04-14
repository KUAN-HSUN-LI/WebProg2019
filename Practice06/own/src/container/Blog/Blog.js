import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./Posts/Posts";
import Main from "./Main";

class Blog extends Component {
	render() {
		return (
			// <BrowserRouter basename="/my-app">
			<Switch>
				{/* <div className="App"> */}
				<Route exact path="/" component={Main} />
				<Route exact path="/posts" component={Posts} />
				{/* </div> */}
			</Switch>
		);
	}
}

export default Blog;
