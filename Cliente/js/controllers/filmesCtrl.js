angular.module("cines")

.controller("filmesCtrl", ['$scope','$rootScope', function($scope, $rootScope) {

	var filme = {
		nome: "A Múmia (LEGENDADO)",
		imagem: "../../images/aMumia.jpg",
		genero: "Aventura, Fantasia e Terror",
		classificacao: "14 anos",
		sinopse: "Na Mesopotâmia, séculos atrás, Ahmanet (Sofia Boutella) tem seus planos interrompidos justamente quando está prestes a invocar Set, o deus da morte, de forma que juntos possam governar o mundo.  Mumificada, ela é aprisionada dentro de uma tumba. Nos dias atuais, o local é descoberto por acidente por Nick Morton (Tom Cruise) e Chris Vail …",
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
		nome: "Mulher-Maravilha (DUBLADO)",
		imagem: "../../images/mulherMaravilha.jpg",
		genero: "Ação, Aventura, Fantasia",
		classificacao: "18 anos",
		sinopse: "Treinada desde cedo para ser uma guerreira imbatível, Diana Prince (Gal Gadot) nunca saiu da paradisíaca ilha em que é reconhecida como princesa das Amazonas. Quando o piloto Steve Trevor (Chris Pine) se acidenta e cai numa praia do local, ela descobre que uma guerra sem precedentes está se espalhando pelo mundo e decide deixar seu lar certa …",
		sessoes: [{
						sala: 1,
						horario: "14:15"
					},
					{
						sala: 2,
						horario: "18:45"
					}
		]
	};

	$scope.filmes = [filme, filme2];

	$scope.selecionarFilme = function(filme){
		$rootScope.filmeSelecionado = filme;
	};
}]);