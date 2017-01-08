angular.module("app")
.directive('wirelessBluetoothDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './app/routes/wireless/wirelessDirectives/wirelessBluetoothTmpl.html',
    controller: function($scope, mainService) {
      $(window).scroll(function() {
        var winScroll = $(this).scrollTop();

        if (winScroll >= $('.wireless-bluetooth-header').offset().top - $(window).height()) {

          var offset = winScroll - $('.wireless-bluetooth-header').offset().top + $(window).height() - 150;

          // center moves down on the y-axis on scroll
          $('.wireless-bluetooth-header-img img').css({
            'transform': 'translate(0px, -'+ offset /80 +'%)'
          });
        }

      });
    }

  }


});
