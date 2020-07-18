import React, { useState, createContext, useEffect } from "react";
import NavBar from "./NavBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import SideBar from "./SideBar";

import "./App.css";

export const VideoContext = createContext();

const App = () => {
	const [ searchedValue, setSearchedValue ] = useState({
		videos: [],
		selectedVideo: null
	});

	const API_KEY = process.env.REACT_APP_API_KEY;

	const handleSearch = async (inputText) => {
		const response = await youtube.get("/search", {
			params: {
				q: inputText,
				part: "snippet",
				type: "video",
				maxResults: 16,
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
		<div className="container">
			<NavBar handleSearch={handleSearch} />
			<div className="content">
				<SideBar />

				<main className="video">
					<VideoContext.Provider value={handleSelectedVideo}>
						<VideoDetail video={searchedValue.selectedVideo} />

						<VideoList
							handleSelectedVideo={handleSelectedVideo}
							listOfVideos={searchedValue.videos}
						/>
					</VideoContext.Provider>
				</main>
			</div>
		</div>
	);
};

export default App;
