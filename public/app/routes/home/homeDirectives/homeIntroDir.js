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
    }
  }


});
