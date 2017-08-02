const should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('http://localhost:8080');
let app = require('../app.js');



describe('Testes da classe IngressoRota',function(){
  var ingressoId = "4063114bd386d8fadbd6b004";
	before(function(done){
		api.post('/api/ingresso')
		.set("Accept","application/x-www-form-urlencoded")
		.send({qrCode: "dd48",
    _id: ingressoId,
  	numeroDaCadeira: 2
  })
		.expect('Content-Type',/json/)
		.expect(201)
		.end(function(err, res){
			done();
		});
	});
  it('A requisicao get deve retornar uma resposta 200',function(done){
		api.get('/api/ingresso')
		.set('Accept','application/json')
		.expect(200,done);
	});

	it('A requisicao get by id deve retornar uma resposta 200',function(done){
		api.get('/api/ingresso/'+ingressoId)
		.set('Accept','application/json')
		.expect(200,done);
	});
  it('A requisicao get by id deve retornar um objeto com chaves e valores',function(done){
		api.get('/api/ingresso/'+ingressoId)
		.set('Accept','application/json')
		.expect(200)
		.end(function(err,res){
			expect(res.body).to.have.property("qrCode");
			expect(res.body.nome).to.not.equal(null);
			expect(res.body).to.have.property("numeroDaCadeira");
			expect(res.body.numeroDaCadeira).to.not.equal(null);
			done();
		});
	});
  it('Deve atualizar o qrCode do ingresso',function(done){
		api.put('/api/ingresso/'+ingressoId)
		.set('Accept','application/x-www-form-urlencoded')
		.send({qrCode: "dd48",
    _id: ingressoId,
  	isMeiaEntrada: true
  })
  .expect(200)
  .end(function(err, res){
    expect(res.body.qrCode).to.equal("dd48");
    done();
  });
});

  it('Deve deletar o ingresso',function(done){
     api.del('/api/ingresso/'+ingressoId)
     .expect(200)
     .end(done);
   });

 it('Deve criar um objeto Ingresso',function(done){
   api.post('/api/ingresso')
   .set('Accept','application/json')
   .send({
     qrCode: "ab15",
   	numeroDaCadeira: 1
   })
   .expect('Content-Type',/json/)
   .expect(200)
   .end(function(err, res){
     res.body.should.have.property('qrCode');
     expect(res.body.qrCode).to.equal("ab15");
     done();
   });
   });
});
