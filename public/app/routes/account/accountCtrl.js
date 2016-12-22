angular.module("app")
.controller('accountCtrl', function($scope, user, userService, $state, $stateParams) {
  $scope.user = user;

  $scope.updateUser = function(user) {
		userService.updateUser(user)
			.then(function(response) {
				$scope.user = response.data;
			});
	};

  $scope.logout = function() {
    userService.logout().then(function(response) {
      $state.go('signin');
    });
  };

  $scope.getUsers = function() {
		mainService.getUsers()
			.then(function(response) {
				$scope.users = response.data;
			});
	};

})
