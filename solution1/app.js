(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  // Initialize values
  $scope.foodList = "";
  $scope.foodMessage = "";
  $scope.textboxStyle = "";
  $scope.messageStyle = "";

  // Checks food list input and changes message appropriately
  $scope.checkFoodList = function () {

    // Split into an array (delimitted by a comma)
    var splitList = $scope.foodList.split(',');
    var count = splitList.length;

    // Check for empty list items and decrement
    for (var i=0; i < splitList.length; i++) {
      if (splitList[i].trim().length == 0) {
        count--;
      }
    }

    // Make changes based on number of food items in list
    if (count < 1) {
      $scope.foodMessage = "Please enter data first.";
      $scope.textboxStyle = {
        "border-color" : "red"
      }
      $scope.messageStyle = {
        "color" : "red"
      }
    }
    else if (count > 3) {
      $scope.foodMessage = "Too much!";
      $scope.textboxStyle = {
        "border-color" : "green"
      }
      $scope.messageStyle = {
        "color" : "green"
      }
    }
    else {
      $scope.foodMessage = "Enjoy!";
      $scope.textboxStyle = {
        "border-color" : "green"
      }
      $scope.messageStyle = {
        "color" : "green"
      }
    }
  };

} // End LunchCheckController

})();
