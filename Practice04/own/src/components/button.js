import React from "react";
export default ({ onClick, id, text, style }) => {
	return (
		<button onClick={onClick} id={id} style={style}>
			{text}
		</button>
	);
};
