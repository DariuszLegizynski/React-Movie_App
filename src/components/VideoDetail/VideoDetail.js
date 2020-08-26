import React from "react";

import "./VideoDetail.css";

let oldSelectedVideo = null;

const VideoDetail = ({ selectedVideo, clickedFavoritedVideo }) => {
	if (!selectedVideo) {
		return <div>Loading...</div>;
	}
	if (!clickedFavoritedVideo) {
		clickedFavoritedVideo = selectedVideo;
	}
	if (clickedFavoritedVideo !== selectedVideo) {
		if (oldSelectedVideo === null) {
			oldSelectedVideo = selectedVideo;
		} else if (oldSelectedVideo !== selectedVideo) {
			oldSelectedVideo = selectedVideo;
		} else {
			selectedVideo = clickedFavoritedVideo;
		}
	}

	const selectedSrc = "https://www.youtube.com/embed/" + selectedVideo.id.videoId;

	return (
		<div className="video-detail">
			<div className="video-detail__view" id="video-viewer">
				<iframe
					title={selectedVideo.snippet.title}
					src={selectedSrc}
					allowFullScreen
				/>
			</div>
			<div className="video-detail__text">
				<h4 className="video-detail__text__title">
					{selectedVideo.snippet.title}
				</h4>
				<p className="video-detail__text__description">
					{selectedVideo.snippet.description}
				</p>
			</div>
		</div>
	);
};

export default VideoDetail;
