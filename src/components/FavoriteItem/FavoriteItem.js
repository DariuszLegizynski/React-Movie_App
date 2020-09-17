import React from "react";
import DeleteFavorited from "../DeleteFavorited/DeleteFavorited";
import { Link } from "react-scroll";

import "./FavoritedItem.css";

const FavoriteItem = ({
	newFavoritedList,
	handleSelectedFavorite,
	onDeleteFavorited,
	id
}) => {
	if (!newFavoritedList) {
		return <div className="favorite-item__loading">Choose your favorite video</div>;
	}

	return (
		<li className="favorite-item">
			<Link
				activeClass="active"
				to="video-viewer"
				smooth={true}
				spy={true}
				duration={500}
				className="video-favorite__link"
			>
				<div
					className="favorite-item__btn-selected"
					onClick={() => handleSelectedFavorite(newFavoritedList)}
				>
					<img
						className="favorite-item__img"
						src={newFavoritedList.snippet.thumbnails.default.url}
						alt="img"
					/>
					<div className="favorite-item__title">
						{newFavoritedList.snippet.title}
					</div>
				</div>
			</Link>

			<DeleteFavorited onDeleteFavorited={onDeleteFavorited} id={id} />
		</li>
	);
};

export default FavoriteItem;
