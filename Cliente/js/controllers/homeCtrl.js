angular.module("cines")

.controller("homeCtrl", ['$scope', '$mdSidenav', '$rootScope', 'RestService', '$state', function($scope, $mdSidenav,$rootScope,RestService,$state) {

	$scope.toggleLeft = buildToggler('left');

    $scope.filmesEmDestaque = [{ src:"../../images/mulherMaravilha.jpg"},
                               { src:"../../images/homemAranha.jpg"},
                               { src:"../../images/transformers.jpg"}];

	$scope.logout = function () {
		console.log("logout")
		$rootScope.usuarioLogado = undefined;
		$state.go('home');
	};

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    };
}]);
