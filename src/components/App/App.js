import React, { useState, createContext, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import youtube from "../../apis/youtube";
import VideoList from "../VideoList/VideoList";
import VideoDetail from "../VideoDetail/VideoDetail";
import SideBar from "../SideBar/SideBar";

import "./App.css";

export const VideoContext = createContext();
export const FavoriteContext = createContext();

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
	const [ videos, setVideos ] = useState([]);

	const [ searchedValue, setSearchedValue ] = useState({
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
				maxResults: 24,
				key: API_KEY
			}
		});

		setVideos(response.data.items);
		setSearchedValue({
			selectedVideo: response.data.items[0] //take the first search result and make it appear as a playable one
		});
	};

	useEffect(() => {
		handleSearch();
	}, []);

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

	const handleFavoritedVideo = (favoritedElement, selectedList) => {
		setFavoritedList((previousFavorited) => {
			return [ { favoritedElement, selectedList }, ...previousFavorited ];
		});
	};

	const deleteFavorited = (id) => {
		setFavoritedList((prevLists) => {
			return prevLists.filter((listItem, index) => {
				return index !== id;
			});
		});
	};

	const [ openSideBar, setOpenSideBar ] = useState(true);

	return (
		<div className="container">
			<NavBar
				handleSearch={handleSearch}
				openSideBar={openSideBar}
				setOpenSideBar={setOpenSideBar}
			/>
			<div className="content">
				{openSideBar && (
					<SideBar
						addList={addList}
						lists={lists}
						handleSelectedFavorite={handleSelectedFavorite}
						favoritedList={favoritedList}
						onDeleteList={onDeleteList}
						onDeleteFavorited={deleteFavorited}
					/>
				)}

				<main className="video">
					<VideoContext.Provider value={handleSelectedVideo}>
						<FavoriteContext.Provider value={handleFavoritedVideo}>
							<VideoDetail
								selectedVideo={searchedValue.selectedVideo}
								clickedFavoritedVideo={
									favoritedItem.clickedFavoritedVideo
								}
							/>
							<VideoList listOfVideos={videos} lists={lists} />
						</FavoriteContext.Provider>
					</VideoContext.Provider>
				</main>
			</div>
		</div>
	);
};

export default App;
