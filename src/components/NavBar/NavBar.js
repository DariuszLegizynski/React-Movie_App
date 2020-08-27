import React, { useState } from "react";
import GoogleAuth from "../GoogleAuth/GoogleAuth";

import "./NavBar.css";
import mainLogo from "../../images/logo.svg";
import iconSprites from "../../images/sprite.svg";

const NavBar = ({ handleSearch }) => {
	const [ inputText, setInputText ] = useState("");

	const handleSearched = (event) => {
		handleSearch(inputText);
		event.preventDefault();
	};

	const handleChange = (event) => {
		setInputText(event.target.value);
	};

	return (
		<header className="header">
			<img src={mainLogo} alt="readeo logo" className="logo" />

			<form onSubmit={handleSearched} className="navbar">
				<input
					className="navbar__input"
					type="text"
					placeholder="Type in to search for videos"
					onChange={handleChange}
					value={inputText}
				/>
				<button className="navbar__button">
					<svg className="navbar__icon">
						<use href={iconSprites + "#icon-search"} />
					</svg>
				</button>
			</form>
			<GoogleAuth />
		</header>
	);
};

export default NavBar;
