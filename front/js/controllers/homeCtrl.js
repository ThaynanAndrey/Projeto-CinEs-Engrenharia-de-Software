angular.module("cines")

.controller("homeCtrl", ['$scope', '$mdSidenav','$timeout', function($scope, $mdSidenav,$timeout) {

	$scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    };
}]);