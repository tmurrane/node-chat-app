const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail: ', newEmail);
  });

  socket.broadcast.emit('joinedMessage', {
    from: 'Admin',
    text: 'New user has joined',
    createdAt: new Date().getTime()
  });

  socket.emit('welcomeMessage', {
    from: 'Admin',
    text: 'Welcome to the chat!'
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage: ', newMessage);
    io.emit('newMessage', {
      from: newMessage.from,
      text: newMessage.text,
      createdAt: new Date().getTime()
    });
  });

  socket.on('disconnect', () => {
    console.log('user has disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
