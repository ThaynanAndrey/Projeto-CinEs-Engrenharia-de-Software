angular.module("cines")

.controller("pagamentoCtrl", ['$scope', '$mdToast', 'RestService', function($scope, $mdToast, RestService) {

	let precoMeia = 10;
	let precoInteira = 20;

	$scope.user = {};
	$scope.user.entradaMeia = 0;
	$scope.user.entradaInteira = 0;
	$scope.user.numeroCartao = "";
	$scope.user.codigoDeSeguranca = "";
	$scope.user.validadeCartao = "";

	$scope.qrCode = "../../images/qrcode.40772041.png"

	$scope.precoIngresso = function () {
		return ($scope.user.entradaMeia * precoMeia) + ($scope.user.entradaInteira * precoInteira);
	};

	$scope.comprarIngresso = function(){
		if(($scope.user.entradaMeia+$scope.user.entradaInteira) === 0){
			mostrarToast("Nenhum ingresso selecionado.");
		}else{
			mostrarToast("Compra realizada com sucesso!");
			goTo('home');
		}
	};

	function mostrarToast(frase){
		$mdToast.show(
      		$mdToast.simple()
        		.textContent(frase)
        		.position('top right')
        		.hideDelay(3000)
    	);
	};
}]);
