angular.module("app")
.controller('privacyCtrl', function($scope, $stateParams, mainService) {
  $scope.stateName = 'Privacy';

  $(".full-state-navbar").stick_in_parent({
    "parent": "body",
    "bottoming": false,
    "sticky_class": ".stuck-state-navbar"
  });


})
