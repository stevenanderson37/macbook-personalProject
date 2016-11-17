angular.module("app")
.directive('navbarDir', function() {

  // $('#bag').on('click', function(){
  //   $(this).toggleClass('clicked');
  // });

  return {
    restrict: 'AE',
    templateUrl: './app/routes/navbarOverall/navbarTmpl.html'
    }


});
