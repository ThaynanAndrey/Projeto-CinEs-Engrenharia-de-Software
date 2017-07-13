angular.module("cines")

.controller("compraCtrl", ['$scope','$rootScope', function($scope,$rootScope) {

	$scope.dataSelecionada = new Date();
	$scope.horarioSelecionado;
	$scope.cadeiraIndisponivelPath = "images/cadeiraIndisponivel.jpg";
	$scope.cadeiraSelecionadaPath = "images/cadeiraSelecionada.jpg";
	$scope.cadeiraDisponivelPath = "images/cadeiraDisponivel.jpg";

	$scope.cadeiras = [{numero:1,
						disponivel: true,
						selecionada:false},

						{numero:2,
						disponivel: false,
						selecionada:false},

						{numero:3,
						disponivel: true,
						selecionada:false}];

	$scope.viewScope = function(){
		console.log($rootScope);
	}

	$scope.selecionarCadeira = function(cadeira){
		if(cadeira.disponivel)
			$scope.alterarEstadoDeCadeira(cadeira);
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

	$scope.alterarEstadoDeCadeira = function(cadeira){
		for (i = 0; i<$scope.cadeiras.length; i++){
			if($scope.cadeiras[i].numero==cadeira.numero)
				$scope.cadeiras[i].selecionada = !cadeira.selecionada;
		}
	}
}]);
