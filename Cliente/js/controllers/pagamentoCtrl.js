angular.module("cines")

.controller("pagamentoCtrl", ['$scope','$rootScope','$state', '$mdToast', 'RestService', function($scope, $rootScope, $state, $mdToast, RestService) {

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

	function goTo(state){
 		$state.go(state);
 	};

	function atualizarCadeiras(){
		for(j=0;j<$rootScope.filmeSelecionado.sessoes.length;j++){
			if($rootScope.filmeSelecionado.sessoes[j].horario==$rootScope.cadeirasSelecionadas.horario){
				for(k=0;k<$rootScope.filmeSelecionado.sessoes[j].cadeiras.length;k++){
					if($rootScope.cadeirasSelecionadas.cadeiras.indexOf($rootScope.filmeSelecionado.sessoes[j].cadeiras[k].numeracao) > -1 ){
						$rootScope.filmeSelecionado.sessoes[j].cadeiras[k].disponivel = false;
					}
				}
			}
		}
		RestService.edit("http://localhost:8080/api/filme/"+$rootScope.filmeSelecionado._id,$rootScope.filmeSelecionado);
	}

	$scope.comprarIngresso = function(){
		if(($scope.user.entradaMeia+$scope.user.entradaInteira) === 0){
			mostrarToast("Nenhum ingresso selecionado.");
		}else{
			atualizarCadeiras();
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
