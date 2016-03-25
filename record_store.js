var _ = require('lodash');

var RecordStore = function() {
  this.records = [];
};

RecordStore.prototype = {
  addRecord: function(record) {
    this.records.push(record);
  }
};

module.exports = RecordStore;