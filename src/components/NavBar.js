import React, { useState } from "react";
import GoogleAuth from "./GoogleAuth";

import "./NavBar.css";
import mainLogo from "../images/logo.svg";

const NavBar = (props) => {
	const [ inputText, setInputText ] = useState("");

	const handleSearch = (event) => {
		props.handleSearch(inputText);
		event.preventDefault();
	};

	const handleChange = (event) => {
		setInputText(event.target.value);
	};

	return (
		<header className="header">
			<img src={mainLogo} alt="readeo logo" className="logo" />
			<form onSubmit={handleSearch} className="navbar">
				<label>Video Search: </label>
				<input
					type="text"
					placeholder="Type in to search for videos"
					onChange={handleChange}
					value={inputText}
				/>
				<button className="navbar__button">
					<svg className="navbar__icon">
						<use xlinkHref="../images/sprite.svg# icon-search" />
					</svg>
				</button>
				<div className="navbar__auth">
					<GoogleAuth />
				</div>
				<div className="navbar-bot">
					<p>For {inputText}, I got nnnn results.</p>
				</div>
			</form>
		</header>
	);
};

export default NavBar;
