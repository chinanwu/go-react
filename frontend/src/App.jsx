import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { store } from './store';

import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Settings from './components/Settings.jsx';
import Signup from './components/Signup.jsx';

import './App.less';

const App = () => {
	const { isLoading, error } = useAuth0();

	if (error) {
		return <div>Oops... {error.message}</div>;
	}

	if (isLoading) {
		return <>Hey I'm loadin here!</>;
	}

	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/settings" component={Settings} />
					<Route component={Home} />
				</Switch>
			</Router>
		</Provider>
	);
};

export default App;
