import "../css/VideoItem.css";
import React, { useContext } from "react";
import { VideoContext } from "./App";

const VideoItem = ({ singleRenderedVideo }) => {
	const videoContext = useContext(VideoContext);
	return (
		<div onClick={() => videoContext(singleRenderedVideo)} className="video-item item">
			<img className="ui image" src={singleRenderedVideo.snippet.thumbnails.medium.url} alt="img" />
			<div className="content">
				<div className="header">{singleRenderedVideo.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;
