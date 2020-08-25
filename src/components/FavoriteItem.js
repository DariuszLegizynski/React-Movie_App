import React from "react";
import DeleteFavorited from "./DeleteFavorited";

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
			<div
				onClick={() => handleSelectedFavorite(newFavoritedList)}
				className="favorite-item__btn-selected"
			>
				<img
					className="favorite-item__img"
					src={newFavoritedList.snippet.thumbnails.medium.url}
					alt="img"
				/>
				<div className="favorite-item__title">
					{newFavoritedList.snippet.title}
				</div>
			</div>
			<DeleteFavorited onDeleteFavorited={onDeleteFavorited} id={id} />
		</li>
	);
};

export default FavoriteItem;
