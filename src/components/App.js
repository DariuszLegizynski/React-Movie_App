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
	const API_KEY = process.env.REACT_APP_API_KEY;

	const [ searchedValue, setSearchedValue ] = useState({
		videos: [],
		selectedVideo: null
	});

	const handleSelectedVideo = (singleRenderedVideo) => {
		setSearchedValue((previous) => ({
			...previous,
			selectedVideo: singleRenderedVideo
		}));
	};

	const handleSearch = async (inputText) => {
		const response = await youtube.get("/search", {
			params: {
				q: inputText,
				part: "snippet",
				type: "video",
				maxResults: 16,
				key: API_KEY,
				SameSite: "None"
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

	//Choose in VideoItem, to which list it will be favorited
	const [ selectedList, setSelectedList ] = useState({ title: "" });

	const onChosenList = (chosenList) => {
		setSelectedList({ title: chosenList });
	};

	console.log(selectedList);

	//By the user newly created lists
	const [ lists, setLists ] = useState([]);

	const addList = (newList) => {
		setLists((prevLists) => {
			return [ ...prevLists, newList ];
		});
	};

	const onDeleteList = (id) => {
		setLists((prevLists) => {
			return prevLists.filter((listItem, index) => {
				return index !== id;
			});
		});
	};

	//Render(Play) Favorited Video
	const [ favoritedItem, setFavoritedItem ] = useState({
		clickedFavoritedVideo: null
	});

	const handleSelectedFavorite = (renderFavorite) => {
		setFavoritedItem((previous) => ({
			...previous,
			clickedFavoritedVideo: renderFavorite
		}));
	};

	//Add a newly favorited video to a, by user created, list (BUG: for now the favorited video is added to EVERY, by the user, created list)
	const [ favoritedList, setFavoritedList ] = useState([]);

	const handleFavoritedVideo = (favoritedElement, listTitle) => {
		console.log({ listTitle });
		setFavoritedList((previousFavorited, previousListTitle) => {
			return [
				{ favoritedElement, listTitle },
				...previousFavorited
				// previousListTitle
			];
		});
	};

	console.log({ favoritedList });

	const deleteFavorited = (id) => {
		setFavoritedList((prevLists) => {
			return prevLists.filter((listItem, index) => {
				return index !== id;
			});
		});
	};

	return (
		<div className="container">
			<NavBar handleSearch={handleSearch} />
			<div className="content">
				<SideBar
					addList={addList}
					lists={lists}
					handleSelectedFavorite={handleSelectedFavorite}
					favoritedList={favoritedList}
					onDeleteList={onDeleteList}
					onDeleteFavorited={deleteFavorited}
				/>

				<main className="video">
					<VideoContext.Provider value={handleSelectedVideo}>
						<FavoriteContext.Provider value={handleFavoritedVideo}>
							<VideoDetail
								selectedVideo={searchedValue.selectedVideo}
								clickedFavoritedVideo={
									favoritedItem.clickedFavoritedVideo
								}
							/>
							<VideoList
								listOfVideos={searchedValue.videos}
								lists={lists}
								onChosenList={onChosenList}
							/>
						</FavoriteContext.Provider>
					</VideoContext.Provider>
				</main>
			</div>
		</div>
	);
};

export default App;
