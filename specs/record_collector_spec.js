var RecordStore = require('../record_store');
var Record = require('../record');
var RecordCollector = require('../record_collector');
var assert = require('chai').assert;

describe('Record Collector', function() {

  var record = new Record({title:'Hero', artist:'Nickelback', price:1});
  var record1 = new Record({title:'Dragonland', artist:'Thomas Bergersen', price:2});
  var record2 = new Record({title:'Creation of Earth', artist:'Thomas Bergersen', price:2});

  var recordStore1 = new RecordStore([record1,record2], 'MusicIsLife', 'Edinburgh');

  var theCollector = new RecordCollector('Francesco');

  it('should have a name', function() {
    assert.equal( "Francesco", theCollector.name );
  }),

  it('should be able to buy a record', function() {
    theCollector.buyRecord(record1, recordStore1);
    assert.equal(8, theCollector.money);
  } ),

  it('should be able to sell a record', function() {
    theCollector.sellRecord(record1, recordStore1);
    assert.equal(10, theCollector.money);
  })

});