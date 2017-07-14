angular.module("cines")

.controller("compraCtrl", ['$scope','$rootScope', function($scope,$rootScope) {

	$scope.dataSelecionada = new Date();
	$scope.horarioSelecionado;
	$scope.cadeiraIndisponivelPath = "images/cadeiraIndisponivel.jpg";
	$scope.cadeiraSelecionadaPath = "images/cadeiraSelecionada.jpg";
	$scope.cadeiraDisponivelPath = "images/cadeiraDisponivel.jpg";

	$scope.cadeiras = [];
	
	function addCadeiras(){
		for(i = 0; i<84;i++){
			$scope.cadeiras.push({
				numeracao: i,
				disponivel:true,
				selecionada:false
			});
		}
		for(i = 0;i<84;i+=7){
			$scope.cadeiras[i].disponivel = false;
		}
	}

	$scope.viewScope = function(){
		console.log($rootScope);
	}

	$scope.selecionarCadeira = function(cadeira){
		if(cadeira.disponivel)
			$scope.alterarEstadoDeCadeira(cadeira);
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

	$scope.alterarEstadoDeCadeira = function(cadeira){
		for (i = 0; i<$scope.cadeiras.length; i++){
			if($scope.cadeiras[i].numeracao==cadeira.numeracao)
				$scope.cadeiras[i].selecionada = !cadeira.selecionada;
		}
	}
	addCadeiras();
}]);
