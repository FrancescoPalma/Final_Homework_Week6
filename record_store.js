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
    toReturn = []
    this.inventory.map(function(each) {
      toReturn.push(each.title);
    })
    return toReturn;
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