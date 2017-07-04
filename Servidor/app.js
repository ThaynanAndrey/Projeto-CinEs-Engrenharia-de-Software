let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let app = express();

mongoose.connect('mongodb://localhost:27017/cines',function(err,db){
	console.log("Conectou no db");
	console.log("erro:"+err);
});

let filmeRouter = require('./controladores/FilmeRouter.js');
let usuarioRouter = require('./controladores/UsuarioRouter.js');
let cadeiraRouter = require('./controladores/CadeiraRouter.js');
let ingressoRouter = require('./controladores/IngressoRouter.js');
let salaRouter = require('./controladores/SalaRouter.js');
let secaoRouter = require('./controladores/SecaoRouter.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/filme', filmeRouter);
app.use('/usuario', usuarioRouter);
app.use('/cadeira', cadeiraRouter);
app.use('/ingresso', ingressoRouter);
app.use('/sala', salaRouter);
app.use('/secao', secaoRouter);


app.listen(8080, function(){
	console.log("Servidor está correndo na porta 8080");
});

module.exports = app;
