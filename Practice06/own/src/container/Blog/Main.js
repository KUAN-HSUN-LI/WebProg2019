import React, { Component } from "react";
<<<<<<< HEAD
=======
import Navbar from "../../component/Navbar";
>>>>>>> da78fafe36b174775a68f1b980312413f75c8c10
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
<<<<<<< HEAD
		// const index = ["Services", "Portfolio", "About", "Team", "Contact"];
		return (
			<div id="page-top" className="index">
				{/* <Navbar index={index} /> */}
=======
		const index = ["Services", "Portfolio", "About", "Team", "Contact"];

		return (
			<div id="page-top" className="index">
				<Navbar index={index} />
>>>>>>> da78fafe36b174775a68f1b980312413f75c8c10
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
