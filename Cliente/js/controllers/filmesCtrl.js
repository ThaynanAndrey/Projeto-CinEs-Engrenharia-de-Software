angular.module("cines")

.controller("filmesCtrl", ['$scope','$rootScope', 'RestService', function($scope, $rootScope,RestService) {

	$scope.selecionarFilme = function(filme){
		$rootScope.filmeSelecionado = filme;
	};

	atualizarListaFilmes();

	function atualizarListaFilmes(){
		RestService.find('http://localhost:8080/api/filme', function(response) {
			console.log(response.data);
			$scope.filmes = response.data;
		});
	}

	$scope.formatarData = function(date){
		return date.substring(11, 16);
	}
}]);