import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Blog from "./container/Blog/Blog";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Blog />
			</BrowserRouter>
		);
	}
}

export default App;
