angular.module("app")
.controller('createAccCtrl', function($scope, authService, $state, $stateParams) {

  $scope.register = function(user) {
    authService.registerUser(user).then(function(response) {
      if (!response.data) {
        alert('Unable to create user');
      } else {
        alert('User Created');
        $scope.newUser = {};
        $state.go('account');
        // In order to go to the account state it would have to sign in as well after successfully registering.
        // $state.go('account');
        // Going to the signin state after a successful registration won't work either. Possibly because the process is not able to create a cart for the user at the same time.
        // $state.go('signin');
      }
    }).catch(function(err) {
      alert('Unable to create user');
    });
  };

  $scope.login = function(user) {
    authService.login(user).then(function(response) {
      if (!response.data) {
        alert('User does not exist');
        $scope.user.password = '';
      } else {
        $state.go('account');
      }
    }).catch(function(err) {
      alert('Unable to login');
    });
  };


})
