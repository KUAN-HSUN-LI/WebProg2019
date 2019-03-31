import React from "react";
export default ({ placeholder, onKeyPress }) => {
	return <input type="text" placeholder={placeholder} onKeyPress={onKeyPress} className="todo-app__input" id="todo-input" />;
};
