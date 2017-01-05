angular.module("app")
.controller('spacegray_512GB_1.2GHz', function($scope, products, mainService, userService, authService, $state, $stateParams) {
  $scope.stateName = 'Buy Space Gray 512GB 1.2GHz';

  // VARIABLES
  // ============================================================
  $scope.products = products.data;
  $scope.orderid = $state.params.cartid;
  $scope.qty = 1;

  // FUNCTIONS
  // ============================================================
  $scope.addToCart = function(id, productid, qty) {
    mainService.addToCart(id, productid, qty)
      .then(function(response) {
        console.log(response.data);
      });
  };



})
