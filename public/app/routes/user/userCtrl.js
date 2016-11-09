// INITILIZE CONTROLLER
// ============================================================
angular.module("app")
	.controller("userCtrl", function($scope, mainService) {

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
