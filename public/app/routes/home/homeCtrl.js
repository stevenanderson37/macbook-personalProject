angular.module("app")
.controller('homeCtrl', function($scope, $stateParams, mainService) {
  $scope.stateName = 'Home';

  var yPos, home_photo2;
  function parallax() {
    yPos = this.pageYOffset;
    // console.log(yPos);
    home_photo2 = document.getElementById('home_photo2');
    home_photo2.style.top = yPos * .2 +'px';
  };
  window.addEventListener('scroll', parallax);

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
