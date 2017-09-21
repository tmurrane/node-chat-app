var socket = io();

socket.on('connect', function () {
  console.log('connected to server');

  socket.emit('createEmail', {
    to: 'jen@example.com',
    text: 'Hello this is Tom'
  });

  socket.emit('createMessage', {
    from: 'lynn@example.com',
    text: 'Hello. How are you doing?'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from the server');
});

socket.on('newEmail', function (email) {
  console.log('New Email: ', email);
});

socket.on('newMessage', function (message) {
  console.log('New message: ', message);
});
