angular.module("app")
.directive('wirelessAirplayDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './app/routes/wireless/wirelessDirectives/wirelessAirplayTmpl.html',
    controller: function($scope, mainService) {
      $(window).scroll(function() {
        var winScroll = $(this).scrollTop();

        if (winScroll >= $('.wireless-airplay-header').offset().top - $(window).height()) {

          var offset = winScroll - $('.wireless-airplay-header').offset().top + $(window).height() - 150;

          // center moves down on the y-axis on scroll
          $('.wireless-airplay-header-img img').css({
            'transform': 'translate(0px, -'+ offset /80 +'%)'
          });
        }

      });
    }

  }


});
