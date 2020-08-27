import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar.jsx';

import './About.less';

export const About = () => (
	<div className="About">
		<NavBar active="about" />
	</div>
);

About.propTypes = {
	test: PropTypes.string,
};

export default About;
