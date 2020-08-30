import React, { useCallback, useEffect, useState } from 'react';

import { connect, sendMsg } from '../api';

export const Chat = () => {
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		// Connect to websocket
		connect(msg => {
			console.log('New Message');
			setMessages(messages => [...messages, msg]);
		});
	}, [messages, setMessages]);

	const handleClick = useCallback(() => {
		console.log('click');
		sendMsg('hello');
	}, []);

	return (
		<>
			<button onClick={handleClick}>Click me</button>
			<div>
				{messages.map((message, i) => (
					<p key={i}>{message.data}</p>
				))}
			</div>
		</>
	);
};

export default Chat;
