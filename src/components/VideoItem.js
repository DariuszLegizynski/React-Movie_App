import React, { useContext } from "react";
import { VideoContext } from "./App";
import { Link } from "react-scroll";
// animateScroll as scroll

import "./VideoItem.css";
import iconSprites from "../images/sprite.svg";

const VideoItem = ({ singleRenderedVideo }) => {
	const videoContext = useContext(VideoContext);

	return (
		<div onClick={() => videoContext(singleRenderedVideo)} className="video-item">
			<Link
				activeClass="active"
				to="video-viewer"
				smooth={true}
				spy={true}
				duration={500}
				className="video-item__link"
				htmlFor="checkbox-link"
			>
				<input
					type="checkbox"
					className="video-item__checkbox-link"
					id="checkbox-link"
				/>
			</Link>
			<img
				className="video-item__img"
				src={singleRenderedVideo.snippet.thumbnails.medium.url}
				alt="img"
				htmlFor="checkbox-link"
			/>

			<input
				type="checkbox"
				className="video-item__checkbox-favorite"
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
