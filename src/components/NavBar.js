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
		<div className="main-header">
			<form onSubmit={handleSearch} className="abc">
				<div className="abc">
					<div>
						<label>Video Search</label>
					</div>
					<div className="abc">
						<GoogleAuth />
					</div>
					<div>
						<input
							type="text"
							placeholder="Type in to search for videos"
							onChange={handleChange}
							value={inputText}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default NavBar;
