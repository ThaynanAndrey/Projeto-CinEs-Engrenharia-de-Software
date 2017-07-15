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
		RestService.find('http://localhost:8080/api/filme', function(response) {
			var filmes = response.data;
			var filmeIndex = 0;
			for(i=0;i<filmes.length;i++){
				if($rootScope.filmeSelecionado._id==filmes[i]._id){
					filmeIndex = i;
					for(j=0;j<filmes[i].sessoes.length;j++){
						if(filmes[i].sessoes[j].horario==$rootScope.cadeirasSelecionadas.horario){
							for(k=0;k<filmes[i].sessoes[j].cadeiras.length;k++){
								if($rootScope.cadeirasSelecionadas.cadeiras.indexOf(filmes[i].sessoes[j].cadeiras[k].numeracao) > -1 ){
									filmes[i].sessoes[j].cadeiras[k].disponivel = false;
								}
							}
						}
					}
				}
			}
			RestService.edit("http://localhost:8080/api/filme/"+filmes[filmeIndex]._id,filmes[filmeIndex]);
		});
		
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
