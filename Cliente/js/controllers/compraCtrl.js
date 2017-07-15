angular.module("cines")

.controller("compraCtrl", ['$scope','$rootScope','RestService', function($scope,$rootScope, RestService) {

	$scope.dataSelecionada = new Date();
	$scope.horarioSelecionado;
	$scope.cadeiraIndisponivelPath = "images/cadeiraIndisponivel.jpg";
	$scope.cadeiraSelecionadaPath = "images/cadeiraSelecionada.jpg";
	$scope.cadeiraDisponivelPath = "images/cadeiraDisponivel.jpg";

	$scope.viewScope = function(){
		console.log($rootScope);
	}

	$scope.selecionarCadeira = function(cadeira, cadeiras){
		if(cadeira.disponivel)
			alterarEstadoDeCadeira(cadeira, cadeiras);
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
				cadeiras[i].selecionada = !cadeira.selecionada;
		}
	};

	$scope.selecionarSessao = function (sessao) {
		$rootScope.sessaoSelecionada = sessao;
	}

	$scope.salvarCadeirasSelecionadas = function(){
		var filme = $rootScope.filmeSelecionado;
		var cadeirasSelecionadas = [];
		for(i=0;i<filme.sessoes.length;i++){
			if(filme.sessoes[i].horario==$scope.horarioSelecionado){
				for (j=0;j<filme.sessoes[i].cadeiras.length;j++){
					if(filme.sessoes[i].cadeiras[j].selecionada){
						cadeirasSelecionadas.push(filme.sessoes[i].cadeiras[j].numeracao);
					}
				}
			}
		}
		$rootScope.cadeirasSelecionadas = {horario:$scope.horarioSelecionado,
										   cadeiras: cadeirasSelecionadas};
	}

}]);
