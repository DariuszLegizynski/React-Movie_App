import React, { useState } from "react";
import SideBarList from "./SideBarList";
import CreateNewList from "./CreateNewList";

import iconSprites from "../images/sprite.svg";
import "./SideBar.css";

const SideBar = () => {
	const [ lists, setLists ] = useState([]);

	const addList = (newList) => {
		setLists((prevLists) => {
			return [ ...prevLists, newList ];
		});
	};

	return (
		<nav className="sidebar">
			<ul className="side-nav">
				{SideBarList.map((list) => {
					return (
						<li className="side-nav__item">
							<div className="side-nav__link">
								<svg className="side-nav__icon">
									<use href={iconSprites + "#icon-list"} />
								</svg>
								<span>{list.title}</span>
								<svg className="side-nav__icon-minus">
									<use href={iconSprites + "#icon-circle-with-minus"} />
								</svg>
							</div>
						</li>
					);
				})}
				{lists.map((newList) => {
					return (
						<li className="side-nav__item">
							<div className="side-nav__link">
								<svg className="side-nav__icon">
									<use href={iconSprites + "#icon-list"} />
								</svg>
								<span>{newList.title}</span>
								<svg className="side-nav__icon-minus">
									<use href={iconSprites + "#icon-circle-with-minus"} />
								</svg>
							</div>
						</li>
					);
				})}
				<React.Fragment>
					<CreateNewList onAdd={addList} />
				</React.Fragment>
			</ul>

			<div className="legal">&copy; 2020 by Readeo. All rights reserved.</div>
		</nav>
	);
};

export default SideBar;
