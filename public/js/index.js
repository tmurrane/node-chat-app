var socket = io();

socket.on('connect', function () {
  console.log('connected to server');

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

socket.on('joinedMessage', function (message) {
  console.log('Joined message: ', message);
});

socket.on('welcomeMessage', function (message) {
  console.log('Welcome message: ', message);
});
