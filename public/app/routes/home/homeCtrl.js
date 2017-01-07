angular.module("app")
.controller('homeCtrl', function($scope, $stateParams, $state, mainService, userService, authService) {
  $scope.stateName = 'Home';

  // $(window).stellar();

  // $('body').scroll(function(){
  //
  //   var wScroll = $(this).scrollTop();
  //
  //   $('#home_macos_image').css({
  //     'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  //   });
  //
  //   if(wScroll > $('#home_macos_image').offset().top) {
  //     $('#home_macos_image').each(function(){
  //       $('#home_macos_image').addClass('.is-showing');
  //     });
  //   }
  //
  // }):

});
