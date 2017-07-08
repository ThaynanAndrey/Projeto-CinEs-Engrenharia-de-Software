let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let cors = require('cors');
let app = express();
let intermediadorDeRotas = require('./intermediadorDeRotas/intermediadorDeRotas');

app.use(cors());

let routerMiddleware = require('./middleware/routerMiddleware');

mongoose.connect('mongodb://localhost:27017/cines',function(err,db){
	if(err) {
		console.log("erro: " + err);
	} else {
		console.log("Conectou no db");
	}
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

intermediadorDeRotas.set(app);

app.listen(8080, function(){
	console.log("Servidor está correndo na porta 8080");
});

module.exports = app;