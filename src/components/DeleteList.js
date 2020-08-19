import React from "react";
import iconSprites from "../images/sprite.svg";

const DeleteList = ({ id, onDeleteList }) => {
	const handleClick = () => {
		onDeleteList(id);
	};

	return (
		<React.Fragment>
			<button onClick={handleClick} className="new-list__btn-minus btn">
				<svg className="new-list__icon-minus">
					<use href={iconSprites + "#icon-circle-with-minus"} />
				</svg>
			</button>
		</React.Fragment>
	);
};

export default DeleteList;
