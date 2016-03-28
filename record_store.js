var _ = require('lodash');

var RecordStore = function(inventory, name, city, balance) {
  this.records = [];
  this.inventory = inventory;
  this.name = name;
  this.city = city;
  this.balance = 0;
};

RecordStore.prototype = {
  addRecord: function(record) {
    this.records.push(record);
  },
  addInventory: function(name, city, records) {
    this.inventory = [];
    this.inventory.push(name, city, records);
  },
  listInventory: function() {
    arr = []
    this.inventory.map(function(each) {
      arr.push(each.title);
    })
    return arr;
  },
  sellRecord: function(recordToSell) {
    this.balance = recordToSell.price + this.balance;
  },
  buyRecord: function(recordToBuy) { 
    this.balance = recordToBuy + this.balance;
  },
  finSit: function() {
    stockValue = 0;
    _.forEach (this.inventory, function(each) {
      stockValue = each.price + stockValue;
    })
    return stockValue + this.balance;
  }
};

module.exports = RecordStore;