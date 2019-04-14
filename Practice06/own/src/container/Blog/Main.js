import React, { Component } from "react";
import Header from "./Header";
import Service from "../../component/Service";
import Articles from "../../component/Article";
import About from "../../component/About";
import Team from "../../component/Team";
import Contact from "../../component/Contact";

class Main extends Component {
	// constructor(props) {
	//     {
	//         super(props);
	//         // console.log(props.children);
	//         // console.log(props.children.props.test);
	//     }
	// }
	render() {
		// const index = ["Services", "Portfolio", "About", "Team", "Contact"];
		return (
			<div id="page-top" className="index">
				{/* <Navbar index={index} /> */}
				<Header />
				<Service />
				<Articles />
				<About />
				<Team />
				<Contact />
			</div>
		);
	}
}

export default Main;
