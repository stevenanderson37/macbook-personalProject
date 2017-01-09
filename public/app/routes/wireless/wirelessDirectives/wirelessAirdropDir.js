angular.module("app")
.directive('wirelessAirdropDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './app/routes/wireless/wirelessDirectives/wirelessAirdropTmpl.html',
    controller: function($scope, mainService) {
      // ADDITIONAL CODE TO MAKE THE PARALLAX FOR THIS CONTAINER STOP ONCE IT LEAVES THE VIEW.
      $(window).scroll(function() {
        var airdropContainerHeight = $('.wireless-header-container').height();
        var winScroll = $(this).scrollTop();

        if (winScroll >= $('.wireless-header-container').offset().top - $(window).height() && winScroll <= $('.wireless-header-container').offset().top + airdropContainerHeight) {

          var offset = winScroll - $('.wireless-header-container').offset().top + $(window).height() - 150;

          // center moves down on the y-axis on scroll
          $('.wireless-header-img img').css({
            'transform': 'translate(0px, -'+ offset /80 +'%)'
          });
        }

      });

      // ORIGINAL WHERE PARALLAX DOES NOT TURN OFF
      // $(window).scroll(function() {
      //   var winScroll = $(this).scrollTop();
      //
      //   if (winScroll >= $('.wireless-header-container').offset().top - $(window).height()) {
      //
      //     var offset = winScroll - $('.wireless-header-container').offset().top + $(window).height() - 150;
      //
      //     // center moves down on the y-axis on scroll
      //     $('.wireless-header-img img').css({
      //       'transform': 'translate(0px, -'+ offset /80 +'%)'
      //     });
      //   }
      //
      // });
    }

  }


});
