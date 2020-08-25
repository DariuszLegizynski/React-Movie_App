import React from "react";
import CreateNewList from "./CreateNewList";
import NewList from "./NewList";

import shortid from "shortid";

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
				{/* //This part keeps track of the newly created lists and also allows to delete them */}
				{lists.map((newList, index) => {
					return (
						<NewList
							key={shortid.generate()}
							title={newList.title}
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
