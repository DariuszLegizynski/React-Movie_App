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
		selectedVideo: null
	});
	console.log({ searchedValue });

	//added clickedFavoritedVideo to handle the click at the favoriteItem
	const [ favoritedItem, setFavoritedItem ] = useState({
		clickedFavoritedVideo: null
	});
	const [ favoritedList, setFavoritedList ] = useState([]);

	const API_KEY = process.env.REACT_APP_API_KEY;

	const [ lists, setLists ] = useState([]);

	const addList = (newList) => {
		setLists((prevLists) => {
			return [ ...prevLists, newList ];
		});
	};

	console.log({ lists });

	//to prevent creating empty lists objects
	// const addList = ({title}) =>  {
	//     if(title.length > 0) {
	//       setLists(prev => [{title},...prev]);
	//     }
	//   }

	const onDeleteList = (id) => {
		setLists((prevLists) => {
			return prevLists.filter((listItem, index) => {
				return index !== id;
			});
		});
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

	const handleSelectedVideo = (singleRenderedVideo) => {
		setSearchedValue((previous) => ({
			...previous,
			selectedVideo: singleRenderedVideo
		}));
	};

	const handleSelectedFavorite = (renderFavorite) => {
		setFavoritedItem((previous) => ({
			...previous,
			clickedFavoritedVideo: renderFavorite
		}));
	};

	const handleFavoritedVideo = (favoritedElement) => {
		setFavoritedList((previousFavorited) => {
			return [ favoritedElement, ...previousFavorited ];
		});
	};

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
							/>
						</FavoriteContext.Provider>
					</VideoContext.Provider>
				</main>
			</div>
		</div>
	);
};

export default App;
