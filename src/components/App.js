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
		<div className="ui container">
			<NavBar handleSearch={handleSearch} />
			<p>I got {searchedValue.videos.length} results.</p>
			<VideoContext.Provider value={handleSelectedVideo}>
				<div className="ui stackable grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={searchedValue.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList handleSelectedVideo={handleSelectedVideo} listOfVideos={searchedValue.videos} />
						</div>
					</div>
				</div>
			</VideoContext.Provider>
		</div>
	);
}

export default App;
