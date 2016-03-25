var assert = require('assert');
var Record = require('../record'); 

describe('Record', function() {

  var record = new Record({title:'Dragonland', artist:'Thomas Bergersen', price:2});

  it('should have a title', function() {
    assert.equal('Dragonland', record.title);
  }),

  it('should have an artist', function() {
    assert.equal('Thomas Bergersen', record.artist);
  }),

  it('should have a price', function() {
    assert.equal(2, record.price);
  });

})