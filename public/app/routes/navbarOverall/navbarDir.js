angular.module("app")
.directive('navbarDir', function() {

  return {
    restrict: 'AE',
    templateUrl: './app/routes/navbarOverall/navbarTmpl.html',
    controller: function($scope, mainService) {
      $(window).ready(function() {
        $('#bag').on('click', function(){
          $(this).toggleClass('clicked');
        });
      });
    }
  }


});
