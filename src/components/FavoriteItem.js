import React from "react";

const FavoriteItem = ({ newFavoritedList, handleSelectedFavorite }) => {
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
			</div>
		</React.Fragment>
	);
};

export default FavoriteItem;
