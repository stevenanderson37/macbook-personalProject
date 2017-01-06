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
      // $(window).ready(function() {
      //   $('#bag div ul .bag-dropdown-full li.has-children > a').click(function() {
      //     $(this).parent().children('ul').stop(true, false, true).fadeToggle(400);
      //   });
      // });
    }
  }


});
