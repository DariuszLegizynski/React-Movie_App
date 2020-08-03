import React from "react";

const FavoriteItem = ({ favoritedVideo, handleSelectedFavorite, addFavorite }) => {
	if (!favoritedVideo) {
		return <div>Choose your favorite video</div>;
	}
	return (
		<React.Fragment>
			<div className="side-nav__item">
				<div
					onClick={() => handleSelectedFavorite(favoritedVideo)}
					className="favorite-video"
				>
					<img
						className="favorite-video__img"
						src={favoritedVideo.snippet.thumbnails.medium.url}
						alt="img"
					/>
					<div className="favorite-video__title">
						{favoritedVideo.snippet.title}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default FavoriteItem;
