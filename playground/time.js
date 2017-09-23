// January 1, 1970 00:00:00 am
var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
//console.log(date.format('MMM Do, YYYY h:ss a'));
console.log(date.format('h:mm a'));
