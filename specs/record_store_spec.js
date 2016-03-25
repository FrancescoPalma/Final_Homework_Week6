var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('assert');

describe('RecordStore', function() {

  it('should start with zero records', function(){
    var recordStore = new RecordStore();
    assert.equal(0, recordStore.records.length);
  });

  it('should be able to add a record', function(){
    var recordStore = new RecordStore();
    var record = new Record({title:'Dragonland', artist:'Thomas Bergersen', price:2});
    recordStore.addRecord(record);
    assert.deepEqual(record, recordStore.records[0]);
  });

})
