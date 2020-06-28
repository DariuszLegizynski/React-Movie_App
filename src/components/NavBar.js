import "../scss/Navbar.css";
import React, { useState } from "react";
import GoogleAuth from "./GoogleAuth";

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
		<div className="navbar-container">
			<form onSubmit={handleSearch} className="navbar-form">
				<div className="123navbar-items">
					<div className="navbar-top-header">
						<div className="123navbar-label">
							<label>Video Search: </label>
						</div>
						<div className="123nabar-googleAuth">
							<GoogleAuth />
						</div>
					</div>
					<div className="123navbar-input">
						<input
							type="text"
							placeholder="Type in to search for videos"
							onChange={handleChange}
							value={inputText}
						/>
					</div>
					<div>
						<p>For {inputText}, I got nnnn results.</p>
					</div>
				</div>
			</form>
		</div>
	);
};

export default NavBar;
