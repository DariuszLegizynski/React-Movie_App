import React, { useState, createContext } from "react";
import NavBar from "./NavBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

export const VideoContext = createContext();

function App() {
	const [ searchedValue, setSearchedValue ] = useState({ videos: [], selectedVideo: null });

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

	const handleSelectedVideo = (singleRenderedVideo) => {
		console.log("from App.js: ", singleRenderedVideo);
	};

	return (
		<div className="ui container">
			<VideoContext.Provider value={handleSelectedVideo}>
				<NavBar handleSearch={handleSearch} />
				<p>for "the typed in string" I got {searchedValue.videos.length} results.</p>
				<VideoList handleSelectedVideo={handleSelectedVideo} listOfVideos={searchedValue.videos} />
			</VideoContext.Provider>
		</div>
	);
}

export default App;
