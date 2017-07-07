angular.module("cines")

.controller("homeCtrl", ['$scope', '$mdSidenav','$timeout','RestService', function($scope, $mdSidenav,$timeout,RestService) {

	$scope.toggleLeft = buildToggler('left');

    $scope.filmesEmDestaque = [{ src:"http://images.kuoni.co.uk/73/indonesia-34834203-1451484722-ImageGalleryLightbox.jpg"},
                               { src:"http://www.parasholidays.in/blog/wp-content/uploads/2014/05/holiday-tour-packages-for-usa.jpg"},
                               { src:"http://clickker.in/wp-content/uploads/2016/03/new-zealand-fy-8-1-Copy.jpg"}];

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    };

    $scope.getSalas = function(){
    	RestService.find('http://localhost:8080/sala', function(response) {
			console.log(response);
		});
    }
}]);