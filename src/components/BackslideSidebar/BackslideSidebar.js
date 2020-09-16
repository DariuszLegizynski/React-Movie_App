import React from "react";

import "./BackslideSidebar.css";

const BackslideSidebar = ({ hideSidebar }) => {
	return <div className="backslideSidebar" onClick={hideSidebar} />;
};

export default BackslideSidebar;
