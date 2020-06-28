import "../scss/App.css";

import React, { useState, createContext, useEffect } from "react";
import NavBar from "./NavBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

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
		setSearchedValue({
			videos: response.data.items,
			selectedVideo: response.data.items[0] //take the first search result and make it appear as playable
		});
	};

	useEffect(() => {
		handleSearch();
	}, []);

	const handleSelectedVideo = (singleRenderedVideo) => {
		setSearchedValue((previous) => ({
			...previous,
			selectedVideo: singleRenderedVideo
		}));
	};

	return (
		<div className="app-wrapper">
			<div className="app-item-navbar">
				<NavBar handleSearch={handleSearch} />
			</div>
			{/* <p>I got {searchedValue.videos.length} results.</p> */}
			<VideoContext.Provider value={handleSelectedVideo}>
				<div className="app-item-videoDetail">
					<VideoDetail video={searchedValue.selectedVideo} />
				</div>
				<div className="app-item-videoList">
					<VideoList handleSelectedVideo={handleSelectedVideo} listOfVideos={searchedValue.videos} />
				</div>
			</VideoContext.Provider>
			<div className="app-item-playlist">
				<h3>My awesome Playlist</h3>
			</div>
		</div>
	);
}

export default App;
