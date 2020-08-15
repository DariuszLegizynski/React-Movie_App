import React, { useState } from "react";
import SideBarList from "./SideBarList";
import CreateNewList from "./CreateNewList";
import DeleteList from "./DeleteList";
import FavoriteItem from "./FavoriteItem";

import iconSprites from "../images/sprite.svg";
import "./SideBar.css";
import shortid from "shortid";

const SideBar = ({ handleSelectedFavorite, favoritedList, onDeleteFavorited }) => {
	const year = new Date().getFullYear();

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
						<li key={list.key} className="side-nav__item">
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
						<li key={newList.id} className="side-nav__item">
							<div className="side-nav__link">
								<svg className="side-nav__icon">
									<use href={iconSprites + "#icon-list"} />
								</svg>
								<span className="side-nav__span">{newList.title}</span>
								<DeleteList id={index} onDelete={deleteList} />
							</div>
							<div className="side-nav__favorited-list">
								{favoritedList.map((newFavoritedList, id) => {
									return (
										<FavoriteItem
											key={shortid.generate()}
											id={id}
											newFavoritedList={newFavoritedList}
											handleSelectedFavorite={
												handleSelectedFavorite
											}
											onDeleteFavorited={onDeleteFavorited}
										/>
									);
								})}
							</div>
						</li>
					);
				})}

				<CreateNewList onAdd={addList} />
			</ul>

			<div className="legal">&copy; {year} by Readeo. All rights reserved.</div>
		</nav>
	);
};

export default SideBar;
