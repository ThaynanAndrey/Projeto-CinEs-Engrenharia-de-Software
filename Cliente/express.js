let express = require('express');
let app = express();

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
    res.redirect('/index.html');
});

app.listen(8081, function(){
	console.log("Servidor está correndo na porta 8081");
});