import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App.jsx';
import history from './history';
import config from './auth_config.json'; // HATE this

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
	history.push(
		appState && appState.targetUrl
			? appState.targetUrl
			: window.location.pathname
	);
};

ReactDOM.render(
	<Auth0Provider
		domain={config.domain}
		clientId={config.clientId}
		redirectUri={window.location.origin}
		audience={config.audience}
		onRedirectCallback={onRedirectCallback}
	>
		<App />
	</Auth0Provider>,
	document.getElementById('root')
);
