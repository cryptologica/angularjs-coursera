(function () {
'use strict';

angular.module('ShoppingListCheckoff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckoffService', ShoppingListCheckoffService);

// ToBuy Controller
ToBuyController.$inject = ['ShoppingListCheckoffService'];
function ToBuyController(ShoppingListCheckoffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckoffService.getToBuyItems();

  toBuyList.removeItem = function(itemIndex) {
    ShoppingListCheckoffService.deleteToBuyItem(itemIndex);
  };
}

// AlreadyBought Controller
AlreadyBoughtController.$inject = ['ShoppingListCheckoffService'];
function AlreadyBoughtController(ShoppingListCheckoffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckoffService.getBoughtItems();
}


// Shopping List service
function ShoppingListCheckoffService() {
  var service = this;

  var toBuyItems = [];
  var boughtItems = [];

  // ToBuy API:
  service.addToBuyItem = function(itemName, quantity) { // ADD
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuyItems.push(item);
  };
  service.deleteToBuyItem = function(itemIndex) { // DELETE
    var removed = toBuyItems.splice(itemIndex, 1);
    boughtItems.push(removed[0]);
  };
  service.getToBuyItems = function() { // GET
    return toBuyItems;
  };

  // Bought API
  service.getBoughtItems = function() { // GET
    return boughtItems;
  };

  // Initialize toBuy items
  this.addToBuyItem("cookies", 10);
  this.addToBuyItem("potatoes", 3);
  this.addToBuyItem("escargot", 6);
  this.addToBuyItem("tripe", 22);
  this.addToBuyItem("haggis", 1);

}

})();
