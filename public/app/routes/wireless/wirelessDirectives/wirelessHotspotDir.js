angular.module("app")
.directive('wirelessHotspotDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './app/routes/wireless/wirelessDirectives/wirelessHotspotTmpl.html',
    controller: function($scope, mainService) {
      $(window).scroll(function() {
        var winScroll = $(this).scrollTop();

        if (winScroll >= $('.wireless-hotspot-header').offset().top - $(window).height()) {

          var offset = winScroll - $('.wireless-hotspot-header').offset().top + $(window).height() - 150;

          // center moves down on the y-axis on scroll
          $('.wireless-hotspot-header-img img').css({
            'transform': 'translate(0px, -'+ offset /80 +'%)'
          });
        }

      });
    }

  }

});
