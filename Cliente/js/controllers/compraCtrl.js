angular.module("cines")

.controller("compraCtrl", ['$scope','$rootScope', function($scope,$rootScope) {

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
}]);
