var expect = require('expect');

var {generateMessage} = require('./message');

describe('generate message', () => {
  it('should generate correct message object', () => {
    //store resp in var
    //asset from matches value
    //asset text matches
    //assert createdAt is toBeA('number')
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
