angular.module("cines")

.controller("perfilCtrl", ['$scope','$rootScope','RestService', function($scope,$rootScope,RestService) {
	$scope.ingressos = [];

	function getFilmeDeIngresso(){
		$rootScope.usuarioLogado.ingressos.forEach(function(ingressoId){
			RestService.find('api/ingresso/'+ingressoId, function(ingresso) {
				$scope.ingressos.push({
					filme: ingresso.data.filme.nome,
					cadeira: ingresso.data.numeroDaCadeira
				});

			});
		});
	}

	getFilmeDeIngresso();

}]);
