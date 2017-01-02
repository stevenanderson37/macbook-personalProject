angular.module("app")
.directive('stateNavbarDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './app/routes/navbarState/stateNavbarTmpl.html',
    controller: function($scope, mainService) {
      $(".full-state-navbar").stick_in_parent({
        "parent": "body",
        "bottoming": false,
        "sticky_class": ".stuck-state-navbar"
      });

      $(window).scroll(function() {
        // find the scroll and use this variable to move elements
        var winScroll = $(this).scrollTop();
        // console.log(winScroll);
        if (winScroll >= $('.full-state-navbar-top').offset().top) {
          $('.full-state-navbar-top').css({
            'border-bottom': 'thin solid #eaeaea',
            'background': 'rgba(255, 255, 255, 0.75)'
          });
        }
      });
    }
  }


});
