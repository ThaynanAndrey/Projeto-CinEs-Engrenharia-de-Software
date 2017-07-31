angular.module("cines")

.controller("homeCtrl", ['$scope', '$mdSidenav', '$rootScope', 'RestService', function($scope, $mdSidenav,$rootScope,RestService) {

	$scope.toggleLeft = buildToggler('left');

    $scope.filmesEmDestaque = [{ src:"../../images/mulherMaravilha.jpg"},
                               { src:"../../images/homemAranha.jpg"},
                               { src:"../../images/transformers.jpg"}];

	  $scope.usuarioLogado = function () {
			if($rootScope.usuarioLogado !== undefined){
				return true;
			}
			return false;
		};

		$scope.logout = function () {
			RestService.find("http://localhost:8080/api/logout/",function(response){
	      $rootScope.usuarioLogado = undefined;
	      $state.go('home');
	    });
		};

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    };
}]);
