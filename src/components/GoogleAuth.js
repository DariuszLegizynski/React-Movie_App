import React, { useEffect, useState } from "react";

const OAUTH_KEY = process.env.REACT_APP_OAUTH_KEY;

const GoogleAuth = () => {
	const [ signedIn, setSignedIn ] = useState({ isSignedIn: null });
	// const auth = window.gapi.auth2.getAuthInstance();

	useEffect(() => {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId: OAUTH_KEY,
					scope: "email"
				})
				.then(() => {
					setSignedIn({ isSignedIn: window.gapi.auth2.getAuthInstance().isSignedIn.get() });
				});
		});
	}, []);

	const renderAuthButton = () => {
		if (signedIn.isSignedIn === null) {
			return <div>I dont know if we are signed in</div>;
		} else if (signedIn.isSignedIn) {
			return <div>I am signed in!</div>;
		} else {
			return <div>I am not signed in</div>;
		}
	};

	return <div>Google Auth: {renderAuthButton()}</div>;
};

export default GoogleAuth;
