import React from "react";

const SideBarToggleButton = ({ openSideBar, setOpenSideBar }) => {
	return (
		<button
			className="SideBar-toggle-button"
			onClick={() => setOpenSideBar(!openSideBar)}
		>
			<div className="toggle-button__line">-</div>
			<div className="toggle-button__line">-</div>
			<div className="toggle-button__line">-</div>
		</button>
	);
};

export default SideBarToggleButton;
