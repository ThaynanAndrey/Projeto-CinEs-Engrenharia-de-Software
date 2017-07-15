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
	        sala: 4,
	        genero: "Aventura, Fantasia e Terror",
	        classificacao: "14 anos",
	        sinopse: "Nas profundezas do deserto, uma antiga rainha cujo destino foi injustamente tirado está mumificada. Apesar de estar sepultada em sua cripta, ela desperta nos dias atuais. Com uma maldade acumulada ao longo dos anos, ela espelha terror desde as areais do Oriente Médio até os becos de Londres.",
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

    	let homemAranha = {
	        nome: "Homem-Aranha: De volta ao lar (LEGENDADO)",
	        imagem: "../../images/homemAranha.jpg",
	        sala: 5,
	        genero: "Ação, Aventura",
	        classificacao: "12 anos",
	        sinopse: "Depois de atuar ao lado dos Vingadores, chegou a hora do pequeno Peter Parker (Tom Holland) voltar para casa e para a sua vida, já não mais tão normal. Lutando diariamente contra pequenos crimes nas redondezas, ele pensa ter encontrado a missão de sua vida quando o terrível vilão Abutre (Michael Keaton) surge amedrontando a cidade. O problema é que a tarefa não será tão fácil como ele imaginava.",
	        tempoDeDuracao: "2 horas e 13 minutos",
	        __v: 0,
	        sessoes: [
	            {
	                horario: "2017-07-17T14:30:00.419Z",
	                cadeiras:[],
	                cadeirasOcupadas: 0
	            },
	            {
	                horario: "2017-07-17T19:40:00.419Z",
	                cadeiras:[],
	                cadeirasOcupadas: 0
	            }
	        ]
    	}

    	let mulherMaravilha = {
	        nome: "Mulher-Maravilha (DUBLADO)",
	        imagem: "../../images/mulherMaravilha.jpg",
	        sala: 1,
	        genero: "Ação, Aventura, Fantasia",
	        classificacao: "18 anos",
	        sinopse: "Treinada desde cedo para ser uma guerreira imbatível, Diana Prince nunca saiu da paradisíaca ilha em que é reconhecida como princesa das Amazonas. Quando o piloto Steve Trevor se acidenta e cai em uma praia do local, ela descobre que uma guerra sem precedentes está se espalhando pelo mundo e decide deixar seu lar certa de que pode parar o conflito. Lutando para acabar com todas as lutas, Diana percebe o alcance de seus poderes e sua verdadeira missão na Terra.",
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

    	let filmesAdc = [aMumia,mulherMaravilha, homemAranha];
    	for(k=0;k<filmesAdc.length;k++){
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
