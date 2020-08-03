import React, { useState } from "react";
import SideBarList from "./SideBarList";
import CreateNewList from "./CreateNewList";
import DeleteList from "./DeleteList";
import FavoriteItem from "./FavoriteItem";

import iconSprites from "../images/sprite.svg";
import "./SideBar.css";

const SideBar = ({ favoritedVideo, handleSelectedFavorite }) => {
	const [ lists, setLists ] = useState([]);
	const [ favorite, setFavorite ] = useState([]);

	const addList = (newList) => {
		setLists((prevLists) => {
			return [ ...prevLists, newList ];
		});
	};

	//to prevent creating empty lists objects
	// const addList = ({title}) =>  {
	//     if(title.length > 0) {
	//       setLists(prev => [{title},...prev]);
	//     }
	//   }

	const deleteList = (id) => {
		setLists((prevLists) => {
			return prevLists.filter((listItem, index) => {
				return index !== id;
			});
		});
	};

	const addFavorite = (newFavorite) => {
		setFavorite((prevFavorite) => {
			return [ newFavorite, ...prevFavorite ];
		});
	};

	return (
		<nav className="sidebar">
			<ul className="side-nav">
				{/* //this part gets the lists from the SideBarList.js file */}
				{SideBarList.map((list) => {
					return (
						<li className="side-nav__item">
							<div className="side-nav__link">
								<svg className="side-nav__icon">
									<use href={iconSprites + "#icon-list"} />
								</svg>
								<span className="side-nav__span">{list.title}</span>
								<DeleteList id={list.id} onDelete={deleteList} />
							</div>
						</li>
					);
				})}
				{/* //This part keeps track of the newly created lists and also allows to delete them */}
				{lists.map((newList, index) => {
					return (
						<li className="side-nav__item">
							<div className="side-nav__link">
								<svg className="side-nav__icon">
									<use href={iconSprites + "#icon-list"} />
								</svg>
								<span className="side-nav__span">{newList.title}</span>

								<DeleteList id={index} onDelete={deleteList} />
							</div>
							{favorite.map((newFavorite) => {
								return (
									<li className="favorite-list">
										<img
											className="video-item__img"
											src={
												newFavorite.snippet.thumbnails.medium.url
											}
											alt="img"
										/>
										<span>{newFavorite.title}</span>
									</li>
								);
							})}
							<FavoriteItem
								addFavorite={addFavorite}
								favoritedVideo={favoritedVideo}
								handleSelectedFavorite={handleSelectedFavorite}
							/>
						</li>
					);
				})}
				<CreateNewList onAdd={addList} />
			</ul>

			<div className="legal">&copy; 2020 by Readeo. All rights reserved.</div>
		</nav>
	);
};

export default SideBar;
