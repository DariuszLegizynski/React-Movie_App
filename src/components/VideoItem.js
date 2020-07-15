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

			<input
				type="checkbox"
				className="video-item__checkbox"
				id="checkbox-toggle"
			/>
			<svg className="video-item__icon-favorite" htmlFor="checkbox-toggle">
				<use href={iconSprites + "#icon-star"} />
			</svg>

			<div className="video-item__content">{singleRenderedVideo.snippet.title}</div>
		</div>
	);
};

export default VideoItem;
