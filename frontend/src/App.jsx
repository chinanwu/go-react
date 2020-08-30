import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import Chat from "./components/Chat.jsx";

import './App.less';

export const App = () => {
	return (
		<Provider store={store}>
			<Chat />
		</Provider>
	);
};

export default App;
