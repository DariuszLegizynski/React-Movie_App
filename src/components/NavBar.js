import React, { useState } from "react";

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
		<div className="search-bar ui segment">
			<form onSubmit={handleSearch} className="ui form">
				<div className="field">
					<label>Video Search</label>
					<input
						type="text"
						placeholder="Type in to search for videos"
						onChange={handleChange}
						value={inputText}
					/>
				</div>
			</form>
		</div>
	);
};

export default NavBar;
