import React from "react";
import iconSprites from "../../images/sprite.svg";

const DeleteFavorited = (props) => {
	const handleClick = () => {
		props.onDeleteFavorited(props.id);
	};

	return (
		<React.Fragment>
			<button onClick={handleClick} className="favorite-item__btn--trash btn">
				<svg className="favorite-item__icon--trash">
					<use href={iconSprites + "#icon-trash"} />
				</svg>
			</button>
		</React.Fragment>
	);
};

export default DeleteFavorited;
