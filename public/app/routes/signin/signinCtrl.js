angular.module("app")
.controller('signinCtrl', function($scope, authService, $state, $stateParams) {
  $scope.stateName = 'Sign in';

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
