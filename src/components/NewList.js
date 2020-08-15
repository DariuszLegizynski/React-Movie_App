import React from "react";
import DeleteList from "./DeleteList";
import FavoriteItem from "./FavoriteItem";

import iconSprites from "../images/sprite.svg";
import shortid from "shortid";

import "./NewList.css";

const NewList = ({
	newList,
	index,
	onDelete,
	handleSelectedFavorite,
	favoritedList,
	onDeleteFavorited
}) => {
	return (
		<ul className="new-list">
			<li key={newList.id} className="side-nav__item">
				<input type="checkbox" className="side-nav__checkbox" id="list-toggle" />
				<label htmlFor="list-toggle" className="side-nav__button">
					MENU
				</label>
				<div className="side-nav__background">&nbsp;</div>
				<div className="side-nav__link">
					<svg className="side-nav__icon">
						<use href={iconSprites + "#icon-list"} />
					</svg>
					<span className="side-nav__span">{newList.title}</span>
					<DeleteList id={index} onDelete={onDelete} />
				</div>
				<div className="side-nav__favorited-list">
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
				</div>
			</li>
		</ul>
	);
};

export default NewList;
