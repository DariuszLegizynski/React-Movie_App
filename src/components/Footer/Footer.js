import React from "react";

import "./Footer.css";

const Footer = () => {
	const year = new Date().getFullYear();

	return <div className="legal">&copy; {year} by Readeo. All rights reserved.</div>;
};

export default Footer;
