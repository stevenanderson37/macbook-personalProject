angular.module("app")
.controller('createAccCtrl', function($scope, authService, $state, $stateParams) {

  $scope.register = function(user) {
    authService.registerUser(user).then(function(response) {
      if (!response.data) {
        alert('Unable to create user');
      } else {
        alert('User Created');
        $scope.newUser = {};
        // In order to go to the account state it would have to sign in after successfully registering.
        // $state.go('account');
        // Going to the signin state after a successful registration won't work either.
        // $state.go('signin');
      }
    }).catch(function(err) {
      alert('Unable to create user');
    });
  };


})
