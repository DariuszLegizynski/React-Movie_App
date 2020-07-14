import React from "react";

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className="video__detail">
			<div className="video__detail-embed">
				<iframe title={video.snippet.title} src={videoSrc} allowFullScreen />
			</div>
			<div className="video__detail-segment">
				<h4>{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
