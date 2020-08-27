import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

import NavBar from './NavBar.jsx';

export const Home = () => {
	const { user, logout, isAuthenticated } = useAuth0();

	return (
		<div className="Home">
			<NavBar active="home" />

			{user && <div>Hi {user.name}</div>}
		</div>
	);
};

export default Home;
