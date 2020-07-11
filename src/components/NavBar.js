import React, { useState } from "react";
import GoogleAuth from "./GoogleAuth";

import "./NavBar.css";
import mainLogo from "../images/logo.svg";
import userFoto from "../images/user.jpg";
import iconSprites from "../images/sprite.svg";

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
				<nav className="user-nav">
					<div className="user-nav__auth">
						<GoogleAuth />
					</div>
					<div className="user-nav__icon-box">
						<svg className="user-nav__icon">
							<use href={iconSprites + "#icon-mail"} />
						</svg>
						<span className="user-nav__notification">7</span>
					</div>
					<div className="user-nav__user">
						<img src={userFoto} alt="User" className="user-nav__user-photo" />
						<span className="user-nav__user-name">Thunder</span>
					</div>
				</nav>
				<div className="navbar__bottom">
					<p>For {inputText}, I got nnnn results.</p>
				</div>
			</form>
		</header>
	);
};

export default NavBar;
