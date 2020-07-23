import React from "react";
import iconSprites from "../images/sprite.svg";

const DeleteList = (props) => {
	const handleClick = () => {
		props.onDelete(props.id);
	};

	return (
		<React.Fragment>
			<button onClick={handleClick} className="side-nav__btn-minus btn">
				<svg className="side-nav__icon-minus">
					<use href={iconSprites + "#icon-circle-with-minus"} />
				</svg>
			</button>
		</React.Fragment>
	);
};

export default DeleteList;
