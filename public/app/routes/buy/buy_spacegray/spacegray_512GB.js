angular.module("app")
.controller('spacegray_512GB', function($scope, user, userService, mainService, $state, $stateParams) {
  $scope.stateName = 'Buy Space Gray 512GB page1';
  $scope.user = user;

  $scope.getUsers = function() {
		userService.getUsers()
			.then(function(response) {
				$scope.users = response.data;
			});
	};



})
