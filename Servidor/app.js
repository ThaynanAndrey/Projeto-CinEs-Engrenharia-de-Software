let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();


let app = express();
mongoose.connect('mongodb://localhost:27017/cines',function(err,db){
	console.log("Conectou no db");
	console.log("erro:"+err);
});

let filme = require('./controladores/FilmeCtrl');
app.use('', filme);


//Get filmes
//router.get('/filmes', FilmeCtrl.getFilmes);

app.get("/", function(req,res){
	console.log("entrou");
});

app.listen(8080, function(){
	console.log("Servidor está correndo na porta 8080");
});