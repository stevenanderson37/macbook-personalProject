angular.module("app")
.controller("userCtrl", function($scope, $stateParams, mainService) {

	// VARIABLES
	// ============================================================

	// FUNCTIONS
	// ============================================================
	$scope.getUsers = function() {
		mainService.getUsers()
		.then(function(response) {
			$scope.users = response.data;
		});
	};
	$scope.getUsers();


});
