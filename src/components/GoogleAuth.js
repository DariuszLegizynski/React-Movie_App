import React, { useEffect, useState } from "react";

const OAUTH_KEY = process.env.REACT_APP_OAUTH_KEY;

const GoogleAuth = () => {
	const [ signedIn, setSignedIn ] = useState({ isSignedIn: null });
	// const auth = window.gapi.auth2.getAuthInstance();

	const handlAuthChange = () => {
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
					setSignedIn({ isSignedIn: window.gapi.auth2.getAuthInstance().isSignedIn.get() });
					window.gapi.auth2.getAuthInstance().isSignedIn.listen(handlAuthChange);
				});
		});
	}, []);

	const renderAuthButton = () => {
		if (signedIn.isSignedIn === null) {
			return <div>...loading</div>;
		} else if (signedIn.isSignedIn) {
			return (
				<button onClick={handleSignOut} className="ui red google button">
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button onClick={handleSignIn} className="ui red google button">
					<i className="google icon" />
					Sign In with Google
				</button>
			);
		}
	};

	return <div>Google Auth: {renderAuthButton()}</div>;
};

export default GoogleAuth;
