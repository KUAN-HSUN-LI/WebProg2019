import React, { Component } from "react";
import "../styles.css";
import Header from "../components/header";
import Main from "./main";
import Footer from "./footer";
class App extends Component {
	render() {
		return (
			<div className="todo-app__root" id="root">
				<Header text="todos" />
				<Main />
				{/* <Footer /> */}
			</div>
		);
	}
}

export default App;
