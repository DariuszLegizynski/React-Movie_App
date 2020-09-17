import React, { useState } from "react";
import DeleteList from "../DeleteList/DeleteList";
import FavoriteItem from "../FavoriteItem/FavoriteItem";

import iconSprites from "../../images/sprite.svg";
import shortid from "shortid";

import "./NewList.css";

const NewList = ({
	title,
	index,
	onDeleteList,
	handleSelectedFavorite,
	favoritedList,
	onDeleteFavorited
}) => {
	const filteredFavorites = favoritedList.filter((newFavoritedList) => {
		return title === newFavoritedList.selectedList;
	});

	const mappedFavorites = filteredFavorites.map((item) => {
		return item.favoritedElement;
	});

	const [ isOpen, setIsOpen ] = useState(false);

	let isOpenClasses = "new-list__favorite-list";

	if (isOpen) {
		isOpenClasses = "new-list__favorite-list open-accordion";
	}

	return (
		<ul className="new-list" onClick={() => setIsOpen(!isOpen)}>
			<li className="new-list__item">
				<form className="new-list__link">
					<div className="new-list__accordion">
						<svg className="new-list__icon">
							<use href={iconSprites + "#icon-list"} />
						</svg>
						<span className="new-list__span">{title}</span>
					</div>
					<DeleteList id={index} onDeleteList={onDeleteList} />
				</form>
				<ul className={isOpenClasses}>
					{mappedFavorites.map((newFavoritedList, id) => {
						return (
							<FavoriteItem
								key={shortid.generate()}
								id={id}
								newFavoritedList={newFavoritedList}
								handleSelectedFavorite={handleSelectedFavorite}
								onDeleteFavorited={onDeleteFavorited}
							/>
						);
					})}
				</ul>
			</li>
		</ul>
	);
};

export default NewList;
