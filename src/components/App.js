import React, { useState } from "react";
import NavBar from "./NavBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

function App() {
	const [ searchedValue, setSearchedValue ] = useState({ videos: [] });

	const API_KEY = process.env.REACT_APP_API_KEY;

	const handleSearch = async (inputText) => {
		const response = await youtube.get("/search", {
			params: {
				q: inputText,
				part: "snippet",
				type: "video",
				maxResults: 5,
				key: API_KEY
			}
		});
		setSearchedValue({ videos: response.data.items });
	};

	return (
		<div className="ui container">
			<NavBar handleSearch={handleSearch} />
			<p>for "the typed in string" I got {searchedValue.videos.length} results.</p>
			<VideoList listOfVideos={searchedValue.videos} />
		</div>
	);
}

export default App;
