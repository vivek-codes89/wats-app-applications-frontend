// /src/utils/socket.js

import io from 'socket.io-client';

const socket = io('http://localhost:5000');  // Assuming backend is running on localhost:5000

const sendMessage = (message) => {
  socket.emit('send_message', message);
};

const onMessageReceived = (callback) => {
  socket.on('receive_message', callback);
};

const connect = (userId) => {
  socket.emit('connect_user', userId);
};

export { socket, sendMessage, onMessageReceived, connect };
