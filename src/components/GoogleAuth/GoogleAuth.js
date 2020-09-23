import React, { useEffect, useState } from "react";

import "./GoogleAuth.css";
import userFoto from "../../images/user.jpg";
import iconSprites from "../../images/sprite.svg";

const OAUTH_KEY = process.env.REACT_APP_OAUTH_KEY;

const GoogleAuth = () => {
	const [ signedIn, setSignedIn ] = useState({ isSignedIn: null });

	const handleAuthChange = () => {
		setSignedIn({ isSignedIn: window.gapi.auth2.getAuthInstance().isSignedIn.get() });
	};

	const handleSignIn = () => {
		window.gapi.auth2.getAuthInstance().signIn();
	};

	const handleSignOut = () => {
		window.gapi.auth2.getAuthInstance().signOut();
	};

	useEffect(() => {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId: OAUTH_KEY,
					scope: "email"
				})
				.then(() => {
					setSignedIn({
						isSignedIn: window.gapi.auth2.getAuthInstance().isSignedIn.get()
					});
					window.gapi.auth2
						.getAuthInstance()
						.isSignedIn.listen(handleAuthChange);
				});
		});
	}, []);

	const renderAuthButton = () => {
		if (signedIn.isSignedIn === null) {
			return <div>...loading</div>;
		} else if (signedIn.isSignedIn) {
			return (
				<nav className="user-nav">
					<div className="user-nav__user">
						<span className="user-nav__user-name">Thunder</span>
						<img src={userFoto} alt="User" className="user-nav__user-photo" />
					</div>
					<div className="user-nav__icon-box">
						<svg className="user-nav__icon">
							<use href={iconSprites + "#icon-mail"} />
						</svg>
						<span className="user-nav__notification">7</span>
					</div>
					<div className="user-nav__button">
						<button className="ui red google button" onClick={handleSignOut}>
							<i className="google icon" />
							Sign Out
						</button>
					</div>
				</nav>
			);
		} else {
			return (
				<nav className="user-nav">
					<div className="user-nav__button">
						<button className="ui red google button" onClick={handleSignIn}>
							<i className="google icon" />
							Sign In with Google
						</button>
					</div>
				</nav>
			);
		}
	};

	return <React.Fragment>{renderAuthButton()}</React.Fragment>;
};

export default GoogleAuth;
