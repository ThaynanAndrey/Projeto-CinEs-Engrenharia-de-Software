const should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('http://localhost:8080')

describe('Testes da classe FilmeRota',function(){
	var filmeId = "5063114bd386d8fadbd6b004";
	before(function(done){
		api.post('/api/filme')
		.set("Accept","application/x-www-form-urlencoded")
		.send({
			nome: "A Múmia (LEGENDADO)",
			_id: filmeId,
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
		})
		.expect('Content-Type',/json/)
		.expect(201)
		.end(function(err, res){
			done();
		});
	});

	it('A requisicao get deve retornar uma resposta 200',function(done){
		api.get('/api/filme')
		.set('Accept','application/json')
		.expect(200,done);
	});

	it('A requisicao get by id deve retornar uma resposta 200',function(done){
		api.get('/api/filme/'+filmeId)
		.set('Accept','application/json')
		.expect(200,done);
	});

	it('A requisicao get by id deve retornar um objeto com chaves e valores',function(done){
		api.get('/api/filme/'+filmeId)
		.set('Accept','application/json')
		.expect(200)
		.end(function(err,res){
			expect(res.body).to.have.property("nome");
			expect(res.body.nome).to.not.equal(null);
			expect(res.body).to.have.property("imagem");
			expect(res.body.imagem).to.not.equal(null);
			expect(res.body).to.have.property("sala");
			expect(res.body.sala).to.not.equal(null);
			expect(res.body).to.have.property("genero");
			expect(res.body.genero).to.not.equal(null);
			expect(res.body).to.have.property("classificacao");
			expect(res.body.classificacao).to.not.equal(null);
			expect(res.body).to.have.property("sinopse");
			expect(res.body.sinopse).to.not.equal(null);
			expect(res.body).to.have.property("tempoDeDuracao");
			expect(res.body.tempoDeDuracao).to.not.equal(null);
			expect(res.body).to.have.property("sessoes");
			expect(res.body.sessoes).to.not.equal(null);
			done();
		});
	});

	it('Deve atualizar a classificacao do filme',function(done){
		api.put('/api/filme/'+filmeId)
		.set('Accept','application/x-www-form-urlencoded')
		.send({
			nome: "A Múmia (LEGENDADO)",

	        imagem: "../../images/aMumia.jpg",
	        sala: 4,
	        genero: "Aventura, Fantasia e Terror",
	        classificacao: "18 anos",
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
		})
		.expect(200)
		.end(function(err, res){
			expect(res.body.classificacao).to.equal("18 anos");
			done();
		});
	});

	 it('Deve deletar o filme',function(done){
	    api.del('/api/filme/'+filmeId)
			.expect(200)
			.end(done);
	  });

	it('Deve criar um objeto Filme',function(done){
		api.post('/api/filme')
		.set('Accept','application/json')
		.send({
			nome: "Mulher-Maravilha (DUBLADO)",
	        imagem: "../../Cliente/images/mulherMaravilha.jpg",
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
		})
		.expect('Content-Type',/json/)
		.expect(200)
		.end(function(err, res){
			res.body.should.have.property('nome');
      expect(res.body.nome).to.equal("Mulher-Maravilha (DUBLADO)");
			done();
		});
		});
});
