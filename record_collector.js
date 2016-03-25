var RecordCollector = function(name) {
  this.name = name;
  this.inventory = [];
  this.money = 10;
}

RecordCollector.prototype = {
  buyRecord: function(recordToBuy, store) {
    this.inventory.push(recordToBuy);
    this.money = this.money - recordToBuy.price;
    store.sellRecord(recordToBuy);
  },
  sellRecord: function(recordToSell, store) {
    index = this.inventory.indexOf(recordToSell);
    if (index > -1) {
        this.inventory.splice(index, 1);
    }
    this.money = recordToSell.price + this.money;
    store.buyRecord(recordToSell);
  }
}

module.exports = RecordCollector