import React, { useContext } from "react";
import { VideoContext } from "./App";

const VideoItem = ({ singleRenderedVideo }) => {
	const videoContext = useContext(VideoContext);
	return (
		<div onClick={() => videoContext(singleRenderedVideo)} className="video-item-style">
			<img className="video-item-img" src={singleRenderedVideo.snippet.thumbnails.medium.url} alt="img" />
			<div className="video-item-content">
				<div className="video-item-header">{singleRenderedVideo.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;
