angular.module("app")
.controller('buyCtrl_a_Silver_256GB', function($scope, user, userService, mainService, $state, $stateParams) {
  $scope.stateName = 'Buy Silver 256GB page1';
  $scope.user = user;

  $scope.getUsers = function() {
		userService.getUsers()
			.then(function(response) {
				$scope.users = response.data;
			});
	};



})
