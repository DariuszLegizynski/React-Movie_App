import React, { useContext } from "react";
import { VideoContext, FavoriteContext } from "./App";
import { Link } from "react-scroll";
import Select from "react-select";

import "./VideoItem.css";
import iconSprites from "../images/sprite.svg";

const VideoItem = ({ singleRenderedVideo, lists }) => {
	const videoContext = useContext(VideoContext);
	const favoriteContext = useContext(FavoriteContext);

	const optionLists = lists.map(({ id, title }) => ({ value: id, label: title }));

	return (
		<div className="video-item">
			<Link
				activeClass="active"
				to="video-viewer"
				smooth={true}
				spy={true}
				duration={500}
				className="video-item__link"
			>
				<div
					onClick={() => videoContext(singleRenderedVideo)}
					className="video-item__container"
				>
					<img
						className="video-item__img"
						src={singleRenderedVideo.snippet.thumbnails.high.url}
						alt="img"
					/>

					<div className="video-item__content">
						{singleRenderedVideo.snippet.title}
					</div>
				</div>
			</Link>

			<button className="video-item__btn--favorite btn">
				<Select
					options={optionLists}
					autoFocus
					isSearchable
					onChange={(optionLists) => {
						favoriteContext(singleRenderedVideo, optionLists.label);
					}}
					placeholder="Select favorite list"
					noOptionsMessage={() => "Please create a favorite list first"}
				/>
				<svg className="video-item__icon--favorite">
					<use href={iconSprites + "#icon-star"} />
				</svg>
			</button>
		</div>
	);
};

export default VideoItem;

// onChange={(optionLists) => {
// 	favoriteContext(singleRenderedVideo);
// 	onChosenList(optionLists.label);
// }}
