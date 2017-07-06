let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let app = express();

let routerMiddleware = require('./middleware/routerMiddleware');

mongoose.connect('mongodb://localhost:27017/cines',function(err,db){
	console.log("Conectou no db");
	console.log("erro:"+err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routerMiddleware.set(app);


app.listen(8080, function(){
	console.log("Servidor está correndo na porta 8080");
});

module.exports = app;
