import React, { useContext } from "react";
import { VideoContext } from "./App";

import "./VideoItem.css";
import iconSprites from "../images/sprite.svg";

const VideoItem = ({ singleRenderedVideo }) => {
	const videoContext = useContext(VideoContext);
	return (
		<div onClick={() => videoContext(singleRenderedVideo)} className="video-item">
			<img
				className="video-item__img"
				src={singleRenderedVideo.snippet.thumbnails.medium.url}
				alt="img"
			/>
			<button className="video-item__button">
				<svg className="video-item__favorite">
					<use href={iconSprites + "#icon-star"} />
				</svg>
			</button>
			<div className="video-item__content">
				<div className="video-item_header">
					{singleRenderedVideo.snippet.title}
				</div>
			</div>
		</div>
	);
};

export default VideoItem;
