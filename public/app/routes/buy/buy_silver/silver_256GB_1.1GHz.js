angular.module("app")
.controller('silver_256GB_1.1GHz', function($scope, products, mainService, userService, authService, $state, $stateParams) {
  $scope.stateName = 'Buy Silver 256GB 1.1GHz';

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
