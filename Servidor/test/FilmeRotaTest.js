const should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('http://localhost:8080');
let app = require('../app.js');

describe('Testes da classe FilmeRota',function(){
	var filmeId = "9063114bd386d8fadbd6b005";
	before(function(done){
		api.post('/api/filme')
		.set("Accept",'application/json')
		.send({
			nome: "A Mumia (LEGENDADO)",
			_id: filmeId,
	    imagem: "../../images/aMumia.jpg",
	    genero: "Aventura, Fantasia e Terror",
	    classificacao: 14,
	    sinopse: "Nas profundezas do deserto, uma antiga rainha cujo destino foi injustamente.",
	    tempoDeDuracao: "1 horas e 51 minutos",
			fimDeCartaz: new Date(),
	    sessoes: [
	          {
	              horario: new Date(),
	              cadeiras:[{}],
	              cadeirasOcupadas: 0
	          },
	          {
	              horario: new Date(),
	            	cadeiras:[{}],
	              cadeirasOcupadas: 0
	          }
	      ]
		})
		.expect('Content-Type',/json/)
		.expect(200)
		.end(function(err, res){
			res.body.should.have.property('nome');
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
			nome: "A Mumia (LEGENDADO)",
			_id: filmeId,
	    imagem: "../../images/aMumia.jpg",
	    genero: "Aventura, Fantasia e Terror",
	    classificacao: 18,
	    sinopse: "Nas profundezas do deserto, uma antiga rainha cujo destino foi injustamente.",
	    tempoDeDuracao: "1 horas e 51 minutos",
			fimDeCartaz: new Date(),
	    sessoes: [
	          {
	              horario: new Date(),
	              cadeiras:[{}],
	              cadeirasOcupadas: 0
						},
	          {
	              horario: new Date(),
	            	cadeiras:[{}],
	              cadeirasOcupadas: 0
	          }
	      ]
		})
		.expect(200)
		.end(function(err, res){
			expect(res.body.classificacao).to.equal(18);
			done();
		});
	});

	it('Deve deletar o Filme',function(done){
		 api.del('/api/filme/'+filmeId)
		 .expect(200)
		 .end(done);
	 });

	it('Deve criar um objeto Filme',function(done){
		api.post('/api/filme')
		.set('Accept','application/json')
		.send({
			nome: "Mulher maravilha",
	    imagem: "../../images/aMumia.jpg",
	    genero: "Aventura",
	    classificacao: 14,
	    sinopse: "A melhor heroina.",
	    tempoDeDuracao: "2 horas e 11 minutos",
			fimDeCartaz: new Date(),
	    sessoes: [
	          {
	              horario: new Date(),
	              cadeiras:[{}],
	              cadeirasOcupadas: 0
						},
	          {
	              horario: new Date(),
	            	cadeiras:[{}],
	              cadeirasOcupadas: 0
	          }
	      ]
		})
		.expect('Content-Type',/json/)
		.expect(200)
		.end(function(err, res){
			res.body.should.have.property('nome');
      expect(res.body.nome).to.equal("Mulher maravilha");
			done();
		});
		});
});
