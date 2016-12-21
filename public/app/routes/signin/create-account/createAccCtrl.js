angular.module("app")
.controller('createAccCtrl', function($scope, authService, $state, $stateParams) {

  $scope.register = function(user) {
    authService.registerUser(user).then(function(response) {
      if (!response.data) {
        alert('Unable to create user');
      } else {
        alert('User Created');
        $scope.newUser = {};
        // $state.go('account');
      }
    }).catch(function(err) {
      alert('Unable to create user');
    });
  };

})
