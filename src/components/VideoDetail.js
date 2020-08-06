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
	console.log("selectedVideo in viedoDetail before: ", selectedVideo);
	console.log("favoritedVideo in videoDetail before: ", clickedFavoritedVideo);
	if (clickedFavoritedVideo !== selectedVideo) {
		console.log("oldSelectedVideo, before: ", oldSelectedVideo);
		if (oldSelectedVideo === null) {
			console.log("oldSelectedVideo, selectedVideo: ", oldSelectedVideo);

			oldSelectedVideo = selectedVideo;
		} else if (oldSelectedVideo !== selectedVideo) {
			oldSelectedVideo = selectedVideo;
		} else {
			console.log("oldSelectedVideo, favoritedVideo: ", oldSelectedVideo);

			selectedVideo = clickedFavoritedVideo;
		}
	}

	console.log("selectedVideo in viedoDetail after: ", selectedVideo);
	console.log("favoritedVideo in videoDetail after: ", clickedFavoritedVideo);

	const selectedSrc = "https://www.youtube.com/embed/" + selectedVideo.id.videoId;
	// const favoritedSrc = "https://www.youtube.com/embed/" + favoritedVideo.id.videoId;

	// if (favoritedVideo) {
	// 	return (
	// 		<div className="video-detail">
	// 			<div className="video-detail__view" id="video-viewer">
	// 				<iframe
	// 					title={favoritedVideo.snippet.title}
	// 					src={favoritedSrc}
	// 					allowFullScreen
	// 				/>
	// 			</div>
	// 			<div className="video-detail__text">
	// 				<h4 className="video-detail__text__title">
	// 					{favoritedVideo.snippet.title}
	// 				</h4>
	// 				<p className="video-detail__text__description">
	// 					{favoritedVideo.snippet.description}
	// 				</p>
	// 			</div>
	// 		</div>
	// 	);
	// }
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
