import React, { memo } from "react";
import CreateNewList from "../CreateNewList/CreateNewList";
import NewList from "../NewList/NewList";
import Footer from "../Footer/Footer";

import shortid from "shortid";

import "./SideBar.css";

const SideBar = memo(
	({
		openSidebar,
		handleSelectedFavorite,
		favoritedList,
		onDeleteFavorited,
		addList,
		lists,
		onDeleteList
	}) => {
		let sidebarClasses = "sidebar";
		if (openSidebar) {
			sidebarClasses = "sidebar open";
		}

		return (
			<nav className={sidebarClasses}>
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
				<Footer />
			</nav>
		);
	}
);

export default SideBar;
