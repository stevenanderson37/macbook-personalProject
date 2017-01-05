angular.module("app")
.controller('gold_256GB_1.3GHz', function($scope, products, mainService, userService, authService, $state, $stateParams) {
  $scope.stateName = 'Buy Gold 256GB 1.3GHz';

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
