import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ listOfVideos }) => {
	const renderedListOfVideos = listOfVideos.map((video) => {
		return <VideoItem key={video.id.videoId} singleRenderedVideo={video} />;
	});
	return <div className="video-list-style">{renderedListOfVideos}</div>;
};

export default VideoList;
