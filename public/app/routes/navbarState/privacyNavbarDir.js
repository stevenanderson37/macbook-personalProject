angular.module("app")
.directive('privacyNavbarDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './app/routes/navbarState/privacyNavbarTmpl.html',
    controller: function($scope, mainService) {
      // $(".full-state-navbar").stick_in_parent({
      //   "parent": "body",
      //   "bottoming": false,
      //   "sticky_class": ".stuck-state-navbar"
      // });

      // STICKY NAVBAR WITH JQUERY
      var num = 44; //number of pixels before modifying styles

      $(window).bind('scroll', function () {
        if ($(window).scrollTop() >= num) {
          $('.full-state-navbar').addClass('fixed-navbar');
        } else {
          $('.full-state-navbar').removeClass('fixed-navbar');
        }
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
          $('.state-navbar h2').css({
            'color': '#333333'
          });
          $('.state-navbar a').css({
            'color': '#333333',
            'font-size': '13px',
            'font-weight': 'normal'
          });
          $('.state-navbar-right a.current').css({
            'color': '#999'
          });
        }
        if (winScroll < $('.full-state-navbar-top').offset().top) {
          $('.full-state-navbar-top').css({
            'border-bottom': 'thin solid rgba(255, 255, 255, 0)',
            'background': 'rgba(255, 255, 255, 0)',
          });
          $('.wireless-navbar h2').css({
            'color': '#ffffff'
          });
          $('.wireless-navbar a').css({
            'color': '#ffffff',
            'font-size': '14px',
            'font-weight': '200'
          });
          $('.wireless-navbar .state-navbar-right a.current').css({
            'color': '#dedede'
          });
        }
      });
    }
  }


});
