angular.module("app")
.directive('homeWirelessWorldDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './app/routes/home/homeDirectives/homeWirelessWorldTmpl.html'
    // controller: function($scope, mainService) {
    //   $(window).scroll(function() {
    //     var homePhoto5ContainerHeight = $('.home-photo5-container').height();
    //     var winScroll = $(this).scrollTop();
    //
    //     if (winScroll >= $('.home-photo5').offset().top - $(window).height() && winScroll <= $('.home-photo5').offset().top + homePhoto5ContainerHeight) {
    //
    //       var offset = Math.min(0, winScroll - $('.home-photo5').offset().top + $(window).height() - 200);
    //
    //       // center moves down on the y-axis on scroll
    //       $('.home-photo5 img').css({
    //         'transform': 'translateY('+ offset /50 +'%)'
    //       });
    //     }
    //
    //     if (winScroll >= $('.home-photo5-shadow').offset().top - $(window).height() && winScroll <= $('.home-photo5-shadow').offset().top + homePhoto5ContainerHeight) {
    //
    //       var offset = winScroll - $('.home-photo5-shadow').offset().top + $(window).height();
    //
    //       // left side moves out of view on the x-axis on scroll
    //       $('.home-photo5-shadow img').css({
    //         'transform': 'translateX('+ offset /80 +'%)'
    //       });
    //     }
    //
    //   });
    //
    // }
  }


});
