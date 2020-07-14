import React from "react";

import iconSprites from "../images/sprite.svg";
import "./SideBar.css";

const SideBar = () => {
	return (
		<nav className="sidebar">
			<ul className="side-nav">
				<li className="side-nav__item">
					<a href="Link1" className="side-nav__link">
						<svg className="side-nav__icon">
							<use href={iconSprites + "#icon-list"} />
						</svg>
						<span>Animations</span>
					</a>
				</li>
				<li className="side-nav__item">
					<a href="Link2" className="side-nav__link">
						<svg className="side-nav__icon">
							<use href={iconSprites + "#icon-list"} />
						</svg>
						<span>Music</span>
					</a>
				</li>
				<li className="side-nav__item">
					<a href="Link3" className="side-nav__link">
						<svg className="side-nav__icon">
							<use href={iconSprites + "#icon-circle-with-plus"} />
						</svg>
						<span>New List</span>
					</a>
				</li>
			</ul>

			<div className="legal">&copy; 2020 by Readeo. All rights reserved.</div>
		</nav>
	);
};

export default SideBar;
