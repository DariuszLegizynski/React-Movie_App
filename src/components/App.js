import React, { useState, createContext, useEffect } from "react";
import NavBar from "./NavBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import SideBar from "./SideBar";

import "./App.css";

export const VideoContext = createContext();
export const FavoriteContext = createContext();

const App = () => {
	const [ searchedValue, setSearchedValue ] = useState({
		videos: [],
		selectedVideo: null,
		favoritedVideo: null
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
			selectedVideo: response.data.items[0] //take the first search result and make it appear as a playable one
		});
	};

	useEffect(() => {
		handleSearch();
	}, []);

	const handleSelectedVideo = (singleRenderedVideo) => {
		console.log(singleRenderedVideo);
		setSearchedValue((previous) => ({
			...previous,
			selectedVideo: singleRenderedVideo
		}));
	};

	const handleFavoritedVideo = (favorited) => {
		console.log("favorited in App: ", favorited);
		setSearchedValue((previous) => ({
			...previous,
			favoritedVideo: favorited
		}));
	};

	return (
		<div className="container">
			<NavBar handleSearch={handleSearch} />
			<div className="content">
				<SideBar
					handleFavoritedVideo={handleFavoritedVideo}
					favoritedVideo={searchedValue.favoritedVideo}
				/>

				<main className="video">
					<VideoContext.Provider value={handleSelectedVideo}>
						<FavoriteContext.Provider value={handleFavoritedVideo}>
							<VideoDetail
								selectedVideo={searchedValue.selectedVideo}
								favoritedVideo={searchedValue.favoritedVideo}
							/>
							<VideoList listOfVideos={searchedValue.videos} />
						</FavoriteContext.Provider>
					</VideoContext.Provider>
				</main>
			</div>
		</div>
	);
};

export default App;
