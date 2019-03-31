import React from "react";
import xImg from "../img/x.png";
// import "../styles.css";

export default ({ idx, text, id, onClick1, onClick2 }) => {
	return (
		<li className="todo-app__item">
			<div className="todo-app__checkbox">
				<input type="checkbox" id={idx} onClick={onClick1} />
				<label htmlFor={idx} />
			</div>
			<h1 className="todo-app__item-detail" id={id}>
				{text}
			</h1>
			<img src={xImg} alt="" className="todo-app__item-x" onClick={onClick2} />
		</li>
	);
};
