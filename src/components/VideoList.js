import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ listOfVideos }) => {
	const renderedListOfVideos = listOfVideos.map((video) => {
		return <VideoItem />;
	});
	return <div>{renderedListOfVideos}</div>;
};

export default VideoList;
