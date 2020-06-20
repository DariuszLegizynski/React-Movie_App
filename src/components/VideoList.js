import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ listOfVideos }) => {
	const renderedListOfVideos = listOfVideos.map((video) => {
		return <VideoItem singleRenderedVideo={video} />;
	});
	return <div className="ui relaxed divided list">{renderedListOfVideos}</div>;
};

export default VideoList;
