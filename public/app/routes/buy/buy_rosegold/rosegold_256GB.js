angular.module("app")
.controller('rosegold_256GB', function($scope, user, userService, mainService, $state, $stateParams) {
  $scope.stateName = 'Buy Rose Gold 256GB page1';
  $scope.user = user;

  $scope.getUsers = function() {
		userService.getUsers()
			.then(function(response) {
				$scope.users = response.data;
			});
	};



})
