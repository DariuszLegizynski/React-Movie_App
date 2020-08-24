import React, { useState } from "react";
import DeleteList from "./DeleteList";
import FavoriteItem from "./FavoriteItem";

import iconSprites from "../images/sprite.svg";
import shortid from "shortid";

import "./NewList.css";

const NewList = ({
	newList,
	index,
	onDeleteList,
	handleSelectedFavorite,
	favoritedList,
	onDeleteFavorited
}) => {
	const [ isOpen, setIsOpen ] = useState(false);

	return (
		<ul className="new-list">
			<li key={newList.id} className="new-list__item">
				<div className="new-list__link">
					<div
						className="new-list__accordion"
						onClick={() => setIsOpen(!isOpen)}
					>
						<svg className="new-list__icon">
							<use href={iconSprites + "#icon-list"} />
						</svg>
						<span className="new-list__span">{newList.title}</span>
					</div>
					<DeleteList id={index} onDeleteList={onDeleteList} />
				</div>
				{isOpen && (
					<ul className="new-list__favorite-list">
						{favoritedList.map((newFavoritedList, id) => {
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
