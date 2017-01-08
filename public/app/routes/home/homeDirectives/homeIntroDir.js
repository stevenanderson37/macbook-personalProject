angular.module("app")
.directive('homeIntroDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './app/routes/home/homeDirectives/homeIntroTmpl.html',
    controller: function($scope, mainService) {
      var yPos, home_photo2;
      function parallax() {
        yPos = this.pageYOffset;
        // console.log(yPos);
        home_photo2 = document.getElementById('home_photo2');
        home_photo2.style.top = yPos * .2 +'px';
      };
      window.addEventListener('scroll', parallax);

      // $(window).scroll(function() {
      //   var winScroll = $(this).scrollTop();
      //
      //   if (winScroll >= $('.home-photo2-container').offset().top - $(window).height()) {
      //     var offset = winScroll - $('.home-photo2-container').offset().top + $(window).height();
      //     // center moves down on the y-axis on scroll
      //     $('.home-photo2-container img').css({
      //       'transform': 'translate(0px, '+ offset /80 +'%)'
      //     });
      //   }
      //
      // });
    }
  }


});
