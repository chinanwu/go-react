import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.less';

export const NavBar = ({ active }) => {
	const { isAuthenticated } = useAuth0();

	return (
		<div className="NavBar">
			<div className="NavBar--left">
				<Link to="/" title="Home">
					<button
						id="navHome"
						className="NavBar__btn"
						disabled={'home' === active}
						aria-disabled={'home' === active}
						aria-label="Home"
					>
						Home
					</button>
				</Link>
				<Link to="/about" title="About">
					<button
						id="navAbout"
						className="NavBar__btn"
						disabled={'about' === active}
						aria-disabled={'about' === active}
						aria-label="About"
					>
						About
					</button>
				</Link>
			</div>
			<div className="NavBar--right">
				{isAuthenticated ? (
					<Link to="/settings" title="Settings">
						<button
							id="navSettings"
							className="NavBar__btn"
							disabled={'settings' === active}
							aria-disabled={'settings' === active}
							aria-label="Settings"
						>
							Settings
						</button>
					</Link>
				) : (
					<>
						<Link to="/login" title="Home">
							<button
								id="navLogin"
								className="NavBar__btn"
								disabled={false}
								aria-disabled={false}
								aria-label="Log-In"
							>
								Log-In
							</button>
						</Link>
						<Link to="/signup" title="Home">
							<button
								id="navSignup"
								className="NavBar__btn"
								disabled={false}
								aria-disabled={false}
								aria-label="Sign-Up"
							>
								Sign-Up
							</button>
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

NavBar.propTypes = {
	active: PropTypes.string,
};

export default NavBar;
