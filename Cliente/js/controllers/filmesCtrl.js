angular.module("cines")

.controller("filmesCtrl", ['$scope','$rootScope', 'RestService', function($scope, $rootScope,RestService) {

	var filme = {
		nome: "A volta dos que não foram (DUBLADO)",
		imagem: "../../images/3.jpg.jpg",
		genero: "Ação, Comédia e Aventura",
		classificacao: "14 anos",
		tempoDeDuracao: "2 horas e 14 minutos",
		sinopse: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI.",
		sessoes: [{
						sala: 4,
						horario: "14:30"
					},
					{
						sala: 4,
						horario: "19:00"
					}
		]
	};

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
