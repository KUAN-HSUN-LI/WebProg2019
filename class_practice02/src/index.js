import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Button from "./Button";
import * as serviceWorker from "./serviceWorker";

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 100 };
	}
	handleInc = () => this.setState(state => ({ count: state.count + 1 }));
	handleDec = () => this.setState(state => ({ count: state.count - 1 }));
	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<Button onClick={this.handleInc} text="+" />
				<Button onClick={this.handleDec} text="-" />
			</div>
		);
	}
}

ReactDOM.render(<Counter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
