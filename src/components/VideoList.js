import React from "react";
import VideoItem from "./VideoItem";

import "./VideoList.css";

const VideoList = ({ listOfVideos }) => {
	const renderedListOfVideos = listOfVideos.map((video) => {
		return <VideoItem key={video.id.videoId} singleRenderedVideo={video} />;
	});
	return <div className="video__list">{renderedListOfVideos}</div>;
};

export default VideoList;
