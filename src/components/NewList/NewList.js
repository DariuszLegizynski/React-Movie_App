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
	const [ isOpen, setIsOpen ] = useState(false);

	const filteredFavorites = favoritedList.filter((newFavoritedList) => {
		return title === newFavoritedList.selectedList;
	});

	const mappedFavorites = filteredFavorites.map((item) => {
		return item.favoritedElement;
	});

	return (
		<ul className="new-list">
			<li key={shortid.generate()} className="new-list__item">
				<div className="new-list__link">
					<div
						className="new-list__accordion"
						onClick={() => setIsOpen(!isOpen)}
					>
						<svg className="new-list__icon">
							<use href={iconSprites + "#icon-list"} />
						</svg>
						<span className="new-list__span">{title}</span>
					</div>
					<DeleteList id={index} onDeleteList={onDeleteList} />
				</div>
				{isOpen && (
					<ul className="new-list__favorite-list">
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
				)}
			</li>
		</ul>
	);
};

export default NewList;
