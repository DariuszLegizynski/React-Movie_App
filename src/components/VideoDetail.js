import React from "react";

import "./VideoDetail.css";

const VideoDetail = ({ selectedVideo, favoritedVideo }) => {
	if (!selectedVideo || !favoritedVideo) {
		return <div>Loading...</div>;
	}
	console.log("selectedVideo in viedoDetail: ", selectedVideo);
	console.log("favorited video in videoDetail: ", favoritedVideo);

	const selectedSrc = "https://www.youtube.com/embed/" + selectedVideo.id.videoId;
	const favoritedSrc = "https://www.youtube.com/embed/" + favoritedVideo.id.videoId;

	if (favoritedVideo) {
		return (
			<div className="video-detail">
				<div className="video-detail__view" id="video-viewer">
					<iframe
						title={favoritedVideo.snippet.title}
						src={favoritedSrc}
						allowFullScreen
					/>
				</div>
				<div className="video-detail__text">
					<h4 className="video-detail__text__title">
						{favoritedVideo.snippet.title}
					</h4>
					<p className="video-detail__text__description">
						{favoritedVideo.snippet.description}
					</p>
				</div>
			</div>
		);
	}
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
