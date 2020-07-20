import React from "react";
import iconSprites from "../images/sprite.svg";

const DeleteList = (props) => {
	const handleClick = () => {
		props.onDelete(props.id);
	};

	return (
		<button onClick={handleClick}>
			<svg className="side-nav__icon-minus">
				<use href={iconSprites + "#icon-circle-with-minus"} />
			</svg>
		</button>
	);
};

export default DeleteList;
