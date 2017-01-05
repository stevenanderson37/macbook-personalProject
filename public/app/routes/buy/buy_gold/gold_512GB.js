angular.module("app")
.controller('gold_512GB', function($scope, user, userService, mainService, $state, $stateParams) {
  $scope.stateName = 'Buy Gold 512GB page1';
  $scope.user = user;

  $scope.getUsers = function() {
		userService.getUsers()
			.then(function(response) {
				$scope.users = response.data;
			});
	};



})
