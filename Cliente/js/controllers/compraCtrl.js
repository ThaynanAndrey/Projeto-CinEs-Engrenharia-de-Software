angular.module("cines")

.controller("compraCtrl", ['$scope','$rootScope','RestService', '$state', '$mdToast', function($scope,$rootScope, RestService, $state, $mdToast) {

	$scope.dataAtual = new Date();
	$scope.dataSelecionada = new Date();
	$scope.fimDeCartaz = getFimDeCartaz();
	$rootScope.cadeirasSelecionadas = [];
	$scope.cadeiraIndisponivelPath = "images/cadeiraIndisponivel.jpg";
	$scope.cadeiraSelecionadaPath = "images/cadeiraSelecionada.jpg";
	$scope.cadeiraDisponivelPath = "images/cadeiraDisponivel.jpg";

	$scope.selecionarCadeira = function(cadeira, cadeiras){
		if(cadeira.disponivel)
			alterarEstadoDeCadeira(cadeira, cadeiras);
	}

	function getFimDeCartaz(){
		if (!$rootScope.filmeSelecionado){
			return new Date();
		}
		let data = $rootScope.filmeSelecionado.fimDeCartaz;
		let ano = parseInt(data.substring(0,4));
		let mes = parseInt(data.substring(5,7));
		let dia = parseInt(data.substring(8,10));
		return new Date(ano,mes,dia);
	}

	$scope.formatarData = function(date){
		return date.substring(11, 16);
	}

	$scope.getCorDeCadeira = function(cadeira){
		if(cadeira.disponivel)
			if(cadeira.selecionada)
				return $scope.cadeiraSelecionadaPath;
			else
				return $scope.cadeiraDisponivelPath;
		else
			return $scope.cadeiraIndisponivelPath;
	};

	function alterarEstadoDeCadeira(cadeira, cadeiras){
		for (i = 0; i < cadeiras.length; i++){
			if(cadeiras[i].numeracao == cadeira.numeracao)
				if(cadeira.selecionada){
					cadeiras[i].selecionada = false;
					$rootScope.cadeirasSelecionadas.splice($rootScope.cadeirasSelecionadas.indexOf(cadeira.numeracao), 1);
				}
				else{
					cadeiras[i].selecionada = true;
					$rootScope.cadeirasSelecionadas.push(cadeira.numeracao);
				}

		}
		console.log($rootScope.cadeirasSelecionadas.length);
	};
	$scope.selecionarSessao = function (sessao) {
		$rootScope.sessaoSelecionada = sessao;
	}

	$scope.realizarCompra = function () {
		if($rootScope.cadeirasSelecionadas.length === 0){
			mostrarToast("Nenhuma cadeira selecionada")
		}else{
			$state.go('pagamento');
		}
	}

	function mostrarToast(frase){
		$mdToast.show(
      		$mdToast.simple()
        		.textContent(frase)
        		.position('bottom right')
        		.hideDelay(3000)
    	);
	};
}]);
