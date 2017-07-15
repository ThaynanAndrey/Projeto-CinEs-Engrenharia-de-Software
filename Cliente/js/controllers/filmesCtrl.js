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

	$scope.apagarFilmes = function(){
		RestService.find('http://localhost:8080/api/filme', function(response) {
			console.log("APAGOU");
			for(i=0;i<response.data.length;i++){
				RestService.delete('http://localhost:8080/api/filme/'+response.data[i]._id);
			}
		});
	}

	$scope.criarFilmes = function (){
		console.log("CRIOU");
		let aMumia = {
	        nome: "A Múmia (LEGENDADO)",
	        imagem: "../../images/aMumia.jpg",
	        sala: null,
	        genero: "Aventura, Fantasia e Terror",
	        classificacao: "14 anos",
	        sinopse: "Na Mesopotâmia, séculos atrás, Ahmanet (Sofia Boutella) tem seus planos interrompidos justamente quando está prestes a invocar Set, o deus da morte, de forma que juntos possam governar o mundo.  Mumificada, ela é aprisionada dentro de uma tumba. Nos dias atuais, o local é descoberto por acidente por Nick Morton (Tom Cruise) e Chris Vail …",
	        tempoDeDuracao: "1 horas e 51 minutos",
	        __v: 0,
	        sessoes: [
	            {
	                horario: "2017-07-17T16:20:00.419Z",
	                cadeiras:[],
	                cadeirasOcupadas: 0
	            },
	            {
	                horario: "2017-07-17T20:50:00.419Z",
	                cadeiras:[],
	                cadeirasOcupadas: 0
	            }
	        ]
    	}

    	let mulherMaravilha = {
	        nome: "Mulher-Maravilha (DUBLADO)",
	        imagem: "../../images/mulherMaravilha.jpg",
	        sala: null,
	        genero: "Ação, Aventura, Fantasia",
	        classificacao: "18 anos",
	        sinopse: "Treinada desde cedo para ser uma guerreira imbatível, Diana Prince (Gal Gadot) nunca saiu da paradisíaca ilha em que é reconhecida como princesa das Amazonas. Quando o piloto Steve Trevor (Chris Pine) se acidenta e cai numa praia do local, ela descobre que uma guerra sem precedentes está se espalhando pelo mundo e decide deixar seu lar certa …",
	        tempoDeDuracao: "2 horas e 21 minutos",
	        __v: 0,
	        sessoes: [
	            {
	                horario: "2017-07-17T18:00:00.419Z",
	                cadeiras:[],
	                cadeirasOcupadas: 0
	            },
	            {
	                horario: "2017-07-17T21:30:00.419Z",
	                cadeiras: [],
	                cadeirasOcupadas: 0
	            }
	        ]
    	}

    	let filmesAdc = [aMumia,mulherMaravilha];
    	for(k=0;k<2;k++){
    		for(i=0;i<filmesAdc[k].sessoes.length;i++){
				for(j=1;j<85;j++){
					filmesAdc[k].sessoes[i].cadeiras.push({numeracao:j,
																	disponivel:true,
																	selecionada:false});
				}
			}
			RestService.add("http://localhost:8080/api/filme/",filmesAdc[k]);
    	}
	}
}]);
