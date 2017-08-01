const should = require('chai').should(),
expect = require('chai').expect,
supertest = require('supertest'),
api = supertest('http://localhost:8080')

describe('Testes da classe UsuarioRota',function(){
  /*
    nome: {
  		type:String,
  		required:true
  	},
  	email: {
  		type:String,
  		required:true
  	},
  	senha: {
  		type:String,
  		required:true
  	},
  	cpf:{
  		type:String,
  		required:true
  	},
  	ingressos: {
  		type:[{
  				type:  mongoose.Schema.ObjectId,
  				ref: 'Ingresso'
  			}]
  	}
  */



  var usuarioId = "6063114bd386d8fadbd6b004";
	before(function(done){
		api.post('/api/usuario')
		.set("Accept","application/x-www-form-urlencoded")
		.send({nome: "Fulano",
    _id: usuarioId,
  	email: "fulano@email.com",
  	senha: "senha",
    cpf: "11122233345"
    })
		.expect('Content-Type',/json/)
		.expect(201)
		.end(function(err, res){
			done();
		});
	});
  it('A requisicao get deve retornar uma resposta 200',function(done){
    api.get('/api/usuario')
    .set('Accept','application/json')
    .expect(200,done);
  });

  it('A requisicao get by id deve retornar uma resposta 200',function(done){
    api.get('/api/usuario/'+usuarioId)
    .set('Accept','application/json')
    .expect(200,done);
  });

  it('A requisicao get by id deve retornar um objeto com chaves e valores',function(done){
		api.get('/api/usuario/'+usuarioId)
		.set('Accept','application/json')
		.expect(200)
		.end(function(err,res){
			expect(res.body).to.have.property("nome");
			expect(res.body.nome).to.not.equal(null);
			expect(res.body).to.have.property("email");
			expect(res.body.imagem).to.not.equal(null);
      expect(res.body).to.have.property("senha");
			expect(res.body.imagem).to.not.equal(null);
			done();
		});
	});

  it('Deve atualizar o nome do usuario',function(done){
		api.put('/api/usuario/'+usuarioId)
		.set('Accept','application/x-www-form-urlencoded')
		.send({nome: "Sicrano",
    _id: usuarioId,
  	email: "fulano@email.com",
  	senha: "senha"
    })
  .expect(200)
  .end(function(err, res){
    expect(res.body.nome).to.equal("Sicrano");
    done();
  });
});
it('Deve deletar o usuario',function(done){
   api.del('/api/usuario/'+usuarioId)
   .expect(200)
   .end(done);
 });

it('Deve criar um objeto Usuario',function(done){
 api.post('/api/usuario')
 .set('Accept','application/json')
 .send({nome: "haha",
 email: "hehe@email.com",
 senha: "hoho",
 cpf: "12345678912"
 })
 .expect('Content-Type',/json/)
 .expect(200)
 .end(function(err, res){
   res.body.should.have.property('email');
   expect(res.body.email).to.equal("hehe@email.com");
   done();
 });
 });

});
