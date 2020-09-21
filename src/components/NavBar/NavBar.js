import React, { useState } from "react";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import SideBarToggleButton from "../SideBarToggleButton/SideBarToggleButton";

import "./NavBar.css";
import iconSprites from "../../images/sprite.svg";

const NavBar = ({ handleSearch, openSideBar, setOpenSideBar }) => {
	const [ inputText, setInputText ] = useState("");

	const onHandleSearched = (event) => {
		handleSearch(inputText);
		event.preventDefault();
	};

	return (
		<header className="header">
			<SideBarToggleButton
				openSideBar={openSideBar}
				setOpenSideBar={setOpenSideBar}
			/>
			<svg className="logo">
				<use href={iconSprites + "#icon-star-outlined"} />
			</svg>

			<form onSubmit={onHandleSearched} className="navbar">
				<input
					className="navbar__input"
					type="text"
					placeholder="Type in to search for videos"
					onChange={(event) => setInputText(event.target.value)}
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
