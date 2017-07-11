angular.module("cines")

.controller("compraCtrl", ['$scope','$rootScope', function($scope,$rootScope) {

	$scope.dataSelecionada = new Date();
	$scope.horarioSelecionado;

	$scope.viewScope = function(){
		console.log($rootScope);
	}
}]);
