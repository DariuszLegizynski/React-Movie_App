import React, { useState } from "react";
import NavBar from "./NavBar";

function App() {
	const [ searchedTerm, setSearchedTerm ] = useState("");

	const handleSearchFromApp = (inputText) => {
		console.log(inputText);
		setSearchedTerm(inputText);
	};

	return (
		<div className="ui container">
			<NavBar handleSearch={handleSearchFromApp} />
			<p>Search result for (my text written in the searchBar): {searchedTerm}</p>
		</div>
	);
}

export default App;
