import React from "react";

const FavoriteItem = ({ video, handleFavoritedVideo }) => {
	if (!video) {
		return <div>Nothing here</div>;
	}
	return (
		<div onClick={() => handleFavoritedVideo(video)} className="favorite-video">
			<img
				className="favorite-video__img"
				src={video.snippet.thumbnails.medium.url}
				alt="img"
			/>
			<div className="favorite-video__title">{video.snippet.title}</div>
		</div>
	);
};

export default FavoriteItem;
