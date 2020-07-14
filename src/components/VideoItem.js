import React, { useContext } from "react";
import { VideoContext } from "./App";

import "./VideoItem.css";

const VideoItem = ({ singleRenderedVideo }) => {
	const videoContext = useContext(VideoContext);
	return (
		<div onClick={() => videoContext(singleRenderedVideo)} className="video__item">
			<img
				className="video__item-img"
				src={singleRenderedVideo.snippet.thumbnails.medium.url}
				alt="img"
			/>
			<div className="video__item-content">
				<div className="video__item-header">
					{singleRenderedVideo.snippet.title}
				</div>
			</div>
		</div>
	);
};

export default VideoItem;
