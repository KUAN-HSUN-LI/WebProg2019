import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Posts from "./container/Blog/Posts/Posts";

import Blog from "./container/Blog/Blog";

class App extends Component {
	render() {
		return (
			// <BrowserRouter basename="/my-app">
			<BrowserRouter>
				{/* <div className="App"> */}
				<Route exact path="/" component={Blog} />
				<Route exact path="/posts" component={Posts} />

				{/* </div> */}
			</BrowserRouter>
		);
	}
}

export default App;
