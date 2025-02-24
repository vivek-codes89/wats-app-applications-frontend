// /src/components/ChatBox.js

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMessage, onMessageReceived } from '../services/socketService';
import { logoutUser } from '../redux/actions/authActions';
import { connect } from '../services/socketService';

const ChatBox = () => {
  const [message, setMessage] = useState('');
  const [onlineStatus, setOnlineStatus] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      connect(user._id);
    }

    onMessageReceived((newMessage) => {
      console.log('New message received:', newMessage);
    });
  }, [user]);

  const handleSendMessage = () => {
    if (message) {
      const newMessage = { senderId: user._id, message };
      sendMessage(newMessage);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <button onClick={handleLogout}>Logout</button>

      <div>
        <h2>Chat</h2>
        {messages.map((msg, index) => (
          <div key={index}>
            <p>{msg.senderId}: {msg.message}</p>
          </div>
        ))}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
