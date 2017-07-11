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

	var filme2 = {
		nome: "Desconhecido é sinal (DUBLADO)",
		imagem: "../../images/2.jpg.jpg",
		genero: "Ação e Aventura",
		classificacao: "18 anos",
		tempoDeDuracao: "2 horas e 14 minutos",
		sinopse: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI.",
		sessoes: [{
						sala: 1,
						horario: "10:15"
					},
					{
						sala: 2,
						horario: "18:45"
					}
		]
	};

	//$scope.filmes = [filme, filme2];

	$scope.selecionarFilme = function(filme){
		$rootScope.filmeSelecionado = filme;
	};

	atualizarListaFilmes();

	function atualizarListaFilmes(){
		RestService.find('http://localhost:8080/filme', function(response) {
			console.log(response.data);
			$scope.filmes = response.data;
		});
	}
}]);