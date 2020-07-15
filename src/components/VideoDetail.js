import React from "react";

import "./VideoDetail.css";

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className="video-detail">
			<div className="video-detail__view">
				<iframe title={video.snippet.title} src={videoSrc} allowFullScreen />
			</div>
			<div className="video-detail__text">
				<h4>{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
