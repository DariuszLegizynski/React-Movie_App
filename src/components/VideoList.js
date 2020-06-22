import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ listOfVideos }) => {
	const renderedListOfVideos = listOfVideos.map((video) => {
		return <VideoItem key={video.id.videoId} singleRenderedVideo={video} />;
	});
	return <div className="ui relaxed divided list">{renderedListOfVideos}</div>;
};

export default VideoList;
