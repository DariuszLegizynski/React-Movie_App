import React from "react";

const FavoriteItem = ({ video, handleFavoritedVideo }) => {
	if (!video) {
		return <div>Nothing here</div>;
	}
	return (
		<React.Fragment>
			<li className="side-nav__item">
				<div
					onClick={() => handleFavoritedVideo(video)}
					className="favorite-video"
				>
					<img
						className="favorite-video__img"
						src={video.snippet.thumbnails.medium.url}
						alt="img"
					/>
					<div className="favorite-video__title">{video.snippet.title}</div>
				</div>
			</li>
		</React.Fragment>
	);
};

export default FavoriteItem;
