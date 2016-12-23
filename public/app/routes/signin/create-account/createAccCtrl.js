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

  // I ended up just making "United States" the first option and used the below function to select the first option available just so the select bar wasn't blank. There's a way to get the USA selected even if it's not the first option, but I was having a hard time getting it to work. For some reason this function is making my registration process not working. Have to figure something else out.
  // function countryPreSelect() {
  //   // var select = document.getElementById('countrySelect');
  //   var el = document.createElement('option');
  //   // el.textContent = 'United States';
  //   // el.value = 'USA';
  //   el.selected = true;
  //   // select.appendChild(el);
  // };
  // window.addEventListener(countryPreSelect);

})
