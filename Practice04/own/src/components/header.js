import React from "react";
export default ({ text }) => {
	return (
		<div className="todo-app__header">
			<header className="todo-app__title">{text}</header>
		</div>
	);
};
