angular.module("cines")

.controller("homeCtrl", ['$scope', '$mdSidenav', 'RestService', function($scope, $mdSidenav,RestService) {

	$scope.toggleLeft = buildToggler('left');

    $scope.filmesEmDestaque = [{ src:"../../images/mulherMaravilha.jpg"},
                               { src:"../../images/homemAranha.jpg"},
                               { src:"../../images/aMumia.jpg"}];

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    };
}]);