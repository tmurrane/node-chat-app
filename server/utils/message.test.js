var expect = require('expect');

var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

describe('generate message', () => {
  it('should generate correct message object', () => {
    var from = 'Tom';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from: from,
      text: text
    });
  });
});

describe('generateLocationMessage', () => {
  it('Should generate correct location', () => {
    var from = 'Admin';
    var latitude = 1;
    var longitude = 1;
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from: from,
      url: 'https://www.google.com/maps?q=1,1'
    });
  });
});
