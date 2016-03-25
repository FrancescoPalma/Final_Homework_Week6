var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('assert');

describe('RecordStore', function() {

  var record = new Record({title:'Hero', artist:'Nickelback', price:1});
  var record1 = new Record({title:'Dragonland', artist:'Thomas Bergersen', price:2});
  var record2 = new Record({title:'Creation of Earth', artist:'Thomas Bergersen', price:2});

  var recordStore1 = new RecordStore([record1,record2], 'MusicIsLife', 'Edinburgh');

  it('should start with zero records', function(){
    var recordStore = new RecordStore();
    assert.equal(0, recordStore.records.length);
  });

  it('should be able to add a record', function(){
    var recordStore = new RecordStore();
    recordStore.addRecord(record);
    assert.deepEqual(record, recordStore.records[0]);
  });

  it('should have an inventory', function() {
    assert.equal(2, recordStore1.inventory.length);
  });

  it('should have a name', function() {
    assert.equal('MusicIsLife', recordStore1.name);
  });

  it('should have a city', function() {
    assert.equal('Edinburgh', recordStore1.city);
  });

  it('should return a list of titles', function() {
    result = recordStore1.listInventory();
    assert.deepEqual([record1.title,record2.title], result)
    });

  it('should be able to sell a record', function() {
    recordStore1.balance = 0;
    recordStore1.sellRecord(record1);
    assert.equal(2, recordStore1.balance)
  });

  it('should report the current financial situation', function() {
    result = recordStore1.finSit();
    assert.equal(6, result);
  });

})
