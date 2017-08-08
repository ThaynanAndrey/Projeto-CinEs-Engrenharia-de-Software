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
		for(var j=0;j<$rootScope.filmeSelecionado.sessoes.length;j++){
			if($rootScope.filmeSelecionado.sessoes[j].horario==$rootScope.sessaoSelecionada.horario){
				for(var k=0;k<$rootScope.filmeSelecionado.sessoes[j].cadeiras.length;k++){
					if($rootScope.cadeirasSelecionadas.indexOf($rootScope.filmeSelecionado.sessoes[j].cadeiras[k].numeracao) > -1 ){
						$rootScope.filmeSelecionado.sessoes[j].cadeiras[k].disponivel = false;
					}
				}
			}
		}
		RestService.edit("http://localhost:8080/api/filme/"+$rootScope.filmeSelecionado._id,$rootScope.filmeSelecionado);
	}

	function gerarIngressos() {
		console.log("INGRESSOS!");
		for (var i = 0; i < $rootScope.cadeirasSelecionadas.length; i++) {
			let novoIngresso = {
				qrCode: "../../images/qrcode.40772041.png",
				numeroDaCadeira: $rootScope.cadeirasSelecionadas[i],
				filme: $rootScope.filmeSelecionado._id
			};
			RestService.add("http://localhost:8080/api/ingresso/",novoIngresso, function (response) {
				$rootScope.usuarioLogado.ingressos.push(response.data._id);
				RestService.edit("http://localhost:8080/api/usuario/" + $rootScope.usuarioLogado._id, $rootScope.usuarioLogado);
			});
		}
		//RestService.edit("http://localhost:8080/api/usuario/" + $rootScope.usuarioLogado._id, $rootScope.usuarioLogado);
	}

	$scope.comprarIngressos = function(){
		let qtdCadeiras = $rootScope.cadeirasSelecionadas.length;
		if(($scope.user.entradaMeia+$scope.user.entradaInteira) != qtdCadeiras){
			mostrarToast("Selecione um total de " + qtdCadeiras + " ingressos.");
		}else{
			atualizarCadeiras();
			gerarIngressos();
			mostrarToast("Compra realizada com sucesso!");
			goTo('compraRealizada');
		}
	};

	function mostrarToast(frase){
		$mdToast.show(
      		$mdToast.simple()
        		.textContent(frase)
        		.position('bottom right')
        		.hideDelay(3000)
    	);
	};
}]);
