import React, { Component } from "react";
import Input from "../components/input";
import Item from "../components/item";
import Button from "../components/button";

class Main extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			mode: 0, // 0:all 1:active 2:completed
		};
		global.left = 0;
		global.total = 0;
	}

	generateId = function() {
		return Math.floor(Math.random() * 900000) + 1000;
	};
	handleInput = e => {
		if (e.key === "Enter") {
			const value = e.target.value.trim();
			if (value !== "") {
				e.target.value = null;
				var data = this.state.data;
				const id = this.generateId();
				var isCompleted = false;
				data = data.concat({ id: id, task: value, isCompleted: isCompleted });
				this.setState({ data });
				++global.left;
				++global.total;
				this.update();
			}
		}
	};

	handleDelete = e => {
		var data = this.state.data;
		data = data.filter(item => {
			console.log(item.id);
			console.log(item.isCompleted);
			return item.id !== e.id;
		});
		this.setState({ data });
		--global.left;
		--global.total;
		this.update();
	};

	handleComplete = e => {
		let now = document.getElementById(e.id);
		if (e.isCompleted) {
			e.isCompleted = false;
			now.style["textDecoration"] = "";
			now.style["opacity"] = 1.0;
			++global.left;
		} else {
			e.isCompleted = true;
			now.style["textDecoration"] = "line-through";
			now.style["opacity"] = 0.5;
			--global.left;
		}
		this.update();
	};

	update = function() {
		let num = document.getElementById("todo-app__totalNum");
		num.innerHTML = global.left;
		var foo = document.getElementById("todo-footer");
		if (global.total) {
			foo.style.display = "flex";
		} else {
			foo.style.display = "none";
		}
	};
	handleAll = () => {
		this.btnClear("all");
		this.state.mode = 0;
		this.setState(this.state.mode);
	};

	handleActive = () => {
		this.btnClear("active");
		this.state.mode = 1;
		this.setState(this.state.mode);
	};
	handleCompleted = () => {
		this.btnClear("completed");
		this.state.mode = 2;
		this.setState(this.state.mode);
	};

	handleClearAll = () => {};

	handleClearCompleted = () => {};

	btnClear(button) {
		let all = document.getElementById("all");
		let active = document.getElementById("active");
		let completed = document.getElementById("completed");
		all.style.border = "";
		active.style.border = "";
		completed.style.border = "";
		let btn = document.getElementById(button);
		btn.style.border = "lightgray 1px solid";
	}
	render() {
		var style = { border: "lightgray 1px solid" };

		return (
			<section className="todo-app__main">
				<Input placeholder="What need to be done" onKeyPress={this.handleInput} />
				<ul className="todo-app__list" id="todo-list">
					{this.state.data.map((e, index) => (
						<Item
							key={index}
							idx={index}
							id={e.id}
							text={e.task}
							onClick1={() => this.handleComplete(e)}
							onClick2={() => this.handleDelete(e)}
						/>
					))}
				</ul>
				<footer className="todo-app__footer" id="todo-footer">
					<div className="todo-app__total">
						<p>
							<span id="todo-app__totalNum">{global.counter}</span> left
						</p>
					</div>
					<ul className="todo-app__view-buttons">
						<Button onClick={() => this.handleAll()} id="all" text="All" style={style} />
						<Button onClick={() => this.handleActive()} id="active" text="Active" />
						<Button onClick={() => this.handleCompleted()} id="completed" text="Completed" />
					</ul>
					<div className="todo-app__clean">
						<Button onClick={() => this.handleClearCompleted()} id="clear" text="Clear completed" />
						<Button onClick={() => this.handleClearAll()} id="clear" text="Clear all" />
					</div>
				</footer>
				{/* <Footer data={this.state} /> */}
			</section>
		);
	}
}

// class List extends Main {
// 	constructor(state) {
// 		super(state);
// 		console.log(this.state);
// 	}
// 	render() {
// 		return (
// 			<ul className="todo-app__list" id="todo-list">
// 				{this.state.data.map(e => (
// 					<Item key={e.id} id={e.id} text={e.task} />
// 				))}
// 			</ul>
// 		);
// 	}
// }

export default Main;
