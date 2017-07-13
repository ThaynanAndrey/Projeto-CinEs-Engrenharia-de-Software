var _ = require("lodash");
var express = require("express");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');

var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

// usuarios criados para verificar sem o banco, no meu ta dando pau
var users = [
  {
    id: 1,
    name: 'bernard',
    password: 'senha123'
  },
  {
    id: 2,
    name: 'caio',
    password: 'senha123'
  }
];

//estrategia usada pra gerar o token e tratar na web  autenticação
var jwtOptions = {};
// extrai o jwt do header
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();

//O secretOrKey é o segredo com o qual nossos tokens serão assinados.
jwtOptions.secretOrKey = 'farraEhBomDemais';
 
// o jwt_payload é { id: 2, iat: 1499954866 } que retona no caso do usario 2
var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
  console.log('payload received', jwt_payload);
  
  // seria uma chamada de banco de dados aqui faz a buca do usario pelo id 
  var user = users[_.findIndex(users, {id: jwt_payload.id})];
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

passport.use(strategy);

var app = express();
app.use(passport.initialize());

// 
// testei os fomulario com postman
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json())

app.get("/", function(req, res) {
  res.json({message: "Express is up!"});
});

app.post("/login", function(req, res) {
  if(req.body.name && req.body.password){
    var name = req.body.name;
    var password = req.body.password;
  }
  // seria uma chamada de banco de dados aqui
  var user = users[_.findIndex(users, {name: name})];
  if( ! user ){
    res.status(401).json({message:"usuario nao encontrado"});
  }

  if(user.password === req.body.password) {
    // identificamos o usuário pelo id e o id é o único valor personalizado que se encontra no nosso token mas
    // pode ser o que quiser como email ja que ele sera unico
    var payload = {id: user.id};
    var token = jwt.sign(payload, jwtOptions.secretOrKey);
    res.json({message: "ok", token: token});
    console.log(token);
    console.log('aqui é so barra');
    console.log(payload);
  } else {
    res.status(401).json({message:"password nao confere"});
  }
});

// entrando numa rota que so pode ter acesso com o token, faz a validaçao do token pra rota ,
// o jwt é passado como maiusculo no postamn quando ele pega o token
// fica uma coisa tipo -> JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNDk5OTIwODE2fQ.hxu-5XC0V5zr5vTm6tEk1TRL9gQ4ymLNeKnpNiDSUKg  
// na menssagem fica {"message":"ok","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNDk5OTU0MDU3fQ.kZaMbCweYdCq4FIRQQlB7zoRpR66JM-I2cWIIn6P7QI"} 
// a chamada passport.authenticare('jwt', { session: false }), function(req, res) é que az a magia de autehticaçao com o token
// usa no headers a key Authorization 
app.get("/secret", passport.authenticate('jwt', { session: false }), function(req, res){
	console.log(passport.authenticate('jwt', { session: false }));
  res.json({message: "Sucesso! Você não pode ver isso sem um token Hahahaha"});
});
 
// outra rota pra teste
app.get("/signin", passport.authenticate('jwt', { session: false }), function(req, res){
  res.json({message: "Sucesso! faça o cadastro aeee"});
});

// Middleware  pra proteçao de rota
app.get("/secretDebug",
  function(req, res, next){
    console.log(req.get('Authorization'));
    next();
  }, function(req, res){
    res.json("debugging");
});

// aqui muda a porta pra a do projeto
app.listen(3000, function() {
  console.log("CineES");
});