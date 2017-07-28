angular.module("cines")

.controller("homeCtrl", ['$scope', '$mdSidenav', '$rootScope', 'RestService', function($scope, $mdSidenav,$rootScope,RestService) {

	$scope.toggleLeft = buildToggler('left');

    $scope.filmesEmDestaque = [{ src:"../../images/mulherMaravilha.jpg"},
                               { src:"../../images/homemAranha.jpg"},
                               { src:"../../images/aMumia.jpg"}];

	  $scope.usuarioLogado = function () {
			if($rootScope.usuarioLogado !== undefined){
				return true;
			}
			return false;
		}

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    };
}]);
