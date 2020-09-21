import React, { useContext } from "react";
import { VideoContext, FavoriteContext } from "../App/App";
import { Link } from "react-scroll";
import Select from "react-select";

import "./VideoItem.css";
import iconSprites from "../../images/sprite.svg";

const VideoItem = ({ singleRenderedVideo, lists }) => {
	const videoContext = useContext(VideoContext);
	const favoriteContext = useContext(FavoriteContext);

	const optionLists = lists.map(({ id, title }) => ({ value: id, label: title }));

	const selectStyles = {
		control: (styles) => ({
			...styles,
			backgroundColor: "transparent",
			border: "0",
			boxShadow: "0"
		}),
		valueContainer: (provided, state) => ({ ...provided, padding: "0px" }),
		option: (styles) => ({ ...styles, color: "#333" }),
		noOptionsMessage: (styles) => ({
			...styles,
			color: "#333",
			width: "15rem",
			padding: "1rem",
			margin: "0rem"
		}),
		menu: (styles) => ({
			...styles,
			width: "auto",
			position: "inherit"
		})
	};

	const DropdownIndicator = () => {
		return (
			<svg className="video-item__icon--favorite">
				<use href={iconSprites + "#icon-star"} />
			</svg>
		);
	};

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
					// menuIsOpen={true}
					className="video-item__select"
					options={optionLists}
					autoFocus
					isSearchable={false}
					onChange={(optionLists) => {
						favoriteContext(singleRenderedVideo, optionLists.label);
					}}
					noOptionsMessage={() => "Please create a favorite list first"}
					styles={selectStyles}
					components={{
						DropdownIndicator,
						IndicatorSeparator: () => null,
						Placeholder: () => null
					}}
					theme={(theme) => ({
						...theme,
						borderRadius: 0,
						colors: {
							...theme.colors,
							text: "#333",
							primary25: "#ccc",
							primary: "#999"
						}
					})}
				/>
			</button>
		</div>
	);
};

export default VideoItem;
