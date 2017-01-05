angular.module("app")
.controller('gold_256GB', function($scope, user, userService, mainService, $state, $stateParams) {
  $scope.stateName = 'Buy Gold 256GB page1';
  $scope.user = user;

  $scope.getUsers = function() {
		userService.getUsers()
			.then(function(response) {
				$scope.users = response.data;
			});
	};


})
