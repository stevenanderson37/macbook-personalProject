angular.module("app")
.directive('stateNavbarDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './app/routes/navbarState/stateNavbarTmpl.html',
    controller: function($scope, mainService) {
      $(".full-state-navbar").stick_in_parent({
        "parent": "body",
        "bottoming": false,
        "sticky_class": ".stuck-state-navbar"
      });
    }
  }


});
