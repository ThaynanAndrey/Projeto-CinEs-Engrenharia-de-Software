angular.module("cines")

.controller("pagamentoCtrl", ['$scope', 'RestService', function($scope, RestService) {

	let precoMeia = 10;
	let precoInteira = 20;

	$scope.user = {};
	$scope.user.entradaMeia = 0;
	$scope.user.entradaInteira = 0;
	$scope.user.numeroCartao = "";
	$scope.user.codigoDeSeguranca = "";
	$scope.user.validadeCartao = "";

	$scope.precoIngresso = function () {
		return ($scope.user.entradaMeia * precoMeia) + ($scope.user.entradaInteira * precoInteira);
	};

}]);