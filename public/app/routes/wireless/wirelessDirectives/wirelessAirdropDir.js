angular.module("app")
.directive('wirelessAirdropDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './app/routes/wireless/wirelessDirectives/wirelessAirdropTmpl.html',
    controller: function($scope, mainService) {
      $(window).scroll(function() {
        var winScroll = $(this).scrollTop();

        if (winScroll >= $('.wireless-header-container').offset().top - $(window).height()) {
          var offset = winScroll - $('.wireless-header-container').offset().top + $(window).height();
          // center moves down on the y-axis on scroll
          $('.wireless-header-img img').css({
            'transform': 'translate(0px, -'+ offset /80 +'%)'
          });
        }

      });
    }

  }


});
