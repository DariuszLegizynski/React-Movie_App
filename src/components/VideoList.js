import React from "react";
import VideoItem from "./VideoItem";

import "./VideoList.css";

const VideoList = ({ listOfVideos, lists }) => {
	const renderedListOfVideos = listOfVideos.map((video) => {
		return (
			<VideoItem key={video.id.videoId} singleRenderedVideo={video} lists={lists} />
		);
	});
	return <div className="video-list">{renderedListOfVideos}</div>;
};

export default VideoList;
