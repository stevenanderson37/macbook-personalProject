angular.module("app")
.controller('homeCtrl', function($scope, $stateParams, mainService) {
  $scope.stateName = 'Home';

  $(".full-state-navbar").stick_in_parent({
    "parent": "body",
    "bottoming": false,
    "sticky_class": ".stuck-state-navbar"
  });

  // $(window).scroll(function(){
  //
  //   var wScroll = $(this).scrollTop();
  //
  //   $('.logo').css({
  //     'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  //   });
  //
  //   if(wScroll > $('.measurements').offset().top) {
  //     $('.measurements .measurements-container').each(function(){
  //       $('.measurements .measurements-container').addClass('.is-showing');
  //     });
  //   }
  //
  // }):

})
