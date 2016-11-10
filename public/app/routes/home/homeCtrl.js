angular.module("app")
.controller('homeCtrl', function($scope, $stateParams, mainService) {
  $scope.stateName = 'Home';

  $(".full-state-navbar").stick_in_parent({
    "parent": "body",
    "bottoming": false
  });

})
