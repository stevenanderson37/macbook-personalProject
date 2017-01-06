angular.module("app")
.controller('gold_512GB_1.2GHz', function($scope, user, products, mainService, userService, authService, $state, $stateParams) {

  $scope.user = user;

  $scope.getUsers = function() {
		userService.getUsers()
			.then(function(response) {
				$scope.users = response.data;
			});
	};

  $scope.products = products.data;
  $scope.orderid = $state.params.cartid;
  $scope.qty = 1;

  $scope.addToCart = function(id, productid, qty) {
    mainService.addToCart(id, productid, qty)
      .then(function(response) {
        console.log(response.data);
      });
  };



})
