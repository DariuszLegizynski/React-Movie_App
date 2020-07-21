import React, { useContext } from "react";
import { VideoContext } from "./App";
import { Link } from "react-scroll";

import "./VideoItem.css";
import iconSprites from "../images/sprite.svg";

const VideoItem = ({ singleRenderedVideo }) => {
	const videoContext = useContext(VideoContext);

	const handleClickFavorite = () => {
		console.log("favorite clicked!");
	};

	return (
		<Link
			activeClass="active"
			to="video-viewer"
			smooth={true}
			spy={true}
			duration={500}
			className="video-item__link"
			htmlFor="checkbox-link"
		>
			<div onClick={() => videoContext(singleRenderedVideo)} className="video-item">
				<img
					className="video-item__img"
					src={singleRenderedVideo.snippet.thumbnails.medium.url}
					alt="img"
				/>

				<button
					onClick={handleClickFavorite}
					className="video-item__btn--favorite btn"
				>
					<svg className="video-item__icon--favorite">
						<use href={iconSprites + "#icon-star"} />
					</svg>
				</button>

				<div className="video-item__content">
					{singleRenderedVideo.snippet.title}
				</div>
			</div>
		</Link>
	);
};

export default VideoItem;
