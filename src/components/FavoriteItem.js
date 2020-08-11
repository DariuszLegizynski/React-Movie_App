import React from "react";
import DeleteFavorited from "./DeleteFavorited";

const FavoriteItem = ({
	newFavoritedList,
	handleSelectedFavorite,
	onDeleteFavorited,
	id
}) => {
	if (!newFavoritedList) {
		return <div>Choose your favorite video</div>;
	}
	return (
		<React.Fragment>
			<div className="side-nav__item">
				<div
					onClick={() => handleSelectedFavorite(newFavoritedList)}
					className="favorite-video"
				>
					<img
						className="favorite-video__img"
						src={newFavoritedList.snippet.thumbnails.medium.url}
						alt="img"
					/>
					<div className="favorite-video__title">
						{newFavoritedList.snippet.title}
					</div>
				</div>
				<DeleteFavorited onDeleteFavorited={onDeleteFavorited} id={id} />
			</div>
		</React.Fragment>
	);
};

export default FavoriteItem;
