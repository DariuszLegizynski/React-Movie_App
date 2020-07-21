import React, { useState } from "react";
import SideBarList from "./SideBarList";
import CreateNewList from "./CreateNewList";
import DeleteList from "./DeleteList";

import iconSprites from "../images/sprite.svg";
import "./SideBar.css";

const SideBar = () => {
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
			return prevLists.filter((index) => {
				return index !== id;
			});
		});
	};

	return (
		<nav className="sidebar">
			<ul className="side-nav">
				{/* //this part is to get the lists from the SideBarList.js file */}
				{SideBarList.map((list) => {
					return (
						<li className="side-nav__item">
							<div className="side-nav__link">
								<svg className="side-nav__icon">
									<use href={iconSprites + "#icon-list"} />
								</svg>

								<span className="side-nav__span">{list.title}</span>

								<React.Fragment>
									<DeleteList
										key={list.key}
										id={list.key}
										onDelete={deleteList}
									/>
								</React.Fragment>
							</div>
						</li>
					);
				})}
				{/* //This part is for deleting and styling newly added lists */}
				{lists.map((newList, index) => {
					return (
						<li className="side-nav__item">
							<div className="side-nav__link">
								<svg className="side-nav__icon">
									<use href={iconSprites + "#icon-list"} />
								</svg>
								<span className="side-nav__span">{newList.title}</span>
								<React.Fragment>
									<DeleteList
										key={index}
										id={index}
										onDelete={deleteList}
									/>
								</React.Fragment>
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
