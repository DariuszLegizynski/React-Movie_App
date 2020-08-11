import React, { useState } from "react";
import SideBarList from "./SideBarList";
import CreateNewList from "./CreateNewList";
import DeleteList from "./DeleteList";
import FavoriteItem from "./FavoriteItem";

import iconSprites from "../images/sprite.svg";
import "./SideBar.css";

const SideBar = ({ favoritedVideo, handleSelectedFavorite, favoritedList }) => {
	console.log("favoritedList in SideBar: ", favoritedList);

	const [ lists, setLists ] = useState([]);

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
						</li>
					);
				})}
				{/* {favoritedList.map((newFavoritedList) => {
					return (
						<div // onClick={() => videoContext(newFavoritedList)}
						className="video-item__container">
							<img
								className="video-item__img"
								src={newFavoritedList.snippet.thumbnails.high.url}
								alt="img"
							/>

							<div className="video-item__content">
								{newFavoritedList.snippet.title}
							</div>
						</div>
					);
				})} */}
				{favoritedList.map((newFavoritedList) => {
					return (
						<FavoriteItem
							newFavoritedList={newFavoritedList}
							handleSelectedFavorite={handleSelectedFavorite}
						/>
					);
				})}

				<CreateNewList onAdd={addList} />
			</ul>

			<div className="legal">&copy; 2020 by Readeo. All rights reserved.</div>
		</nav>
	);
};

export default SideBar;
