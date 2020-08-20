import React from "react";
import SideBarList from "./SideBarList";
import CreateNewList from "./CreateNewList";
import DeleteList from "./DeleteList";
import NewList from "./NewList";

import shortid from "shortid";

import iconSprites from "../images/sprite.svg";
import "./SideBar.css";

const SideBar = ({
	handleSelectedFavorite,
	favoritedList,
	onDeleteFavorited,
	addList,
	lists,
	onDeleteList
}) => {
	const year = new Date().getFullYear();
	console.log({ favoritedList });
	return (
		<nav className="sidebar">
			<ul className="side-nav">
				{/* //this part gets the lists from the SideBarList.js file */}
				{SideBarList.map((list) => {
					return (
						<li key={list.key} className="new-list__item">
							<div className="new-list__link">
								<svg className="new-list__icon">
									<use href={iconSprites + "#icon-list"} />
								</svg>
								<span className="new-list__span">{list.title}</span>
								<DeleteList id={list.id} onDeleteList={onDeleteList} />
							</div>
						</li>
					);
				})}
				{/* //This part keeps track of the newly created lists and also allows to delete them */}
				{lists.map((newList, index) => {
					return (
						<NewList
							key={shortid.generate()}
							newList={newList}
							index={index}
							onDeleteList={onDeleteList}
							handleSelectedFavorite={handleSelectedFavorite}
							favoritedList={favoritedList}
							onDeleteFavorited={onDeleteFavorited}
						/>
					);
				})}

				<CreateNewList onAdd={addList} />
			</ul>

			<div className="legal">&copy; {year} by Readeo. All rights reserved.</div>
		</nav>
	);
};

export default SideBar;
