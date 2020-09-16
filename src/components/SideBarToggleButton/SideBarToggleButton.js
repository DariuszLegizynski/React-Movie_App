import React from "react";

import "./SideBarToggleButton.css";

const SideBarToggleButton = ({ openSideBar, setOpenSideBar }) => {
	return (
		<button
			className="navbar-toggle-button"
			onClick={() => setOpenSideBar(!openSideBar)}
		>
			<div className="navbar-toggle-button__line" />
			<div className="navbar-toggle-button__line" />
			<div className="navbar-toggle-button__line" />
		</button>
	);
};

export default SideBarToggleButton;
