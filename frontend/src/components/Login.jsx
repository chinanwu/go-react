import { useAuth0 } from '@auth0/auth0-react';
import React, { useCallback } from 'react';

export const Login = () => {
	const { isAuthenticated, loginWithRedirect } = useAuth0();

	const handleClick = useCallback(() => {
		loginWithRedirect({});
	}, []);

	return (
		<div className="Login">
			{!isAuthenticated && <button onClick={handleClick}>Log In</button>}
		</div>
	);
};

export default Login;
