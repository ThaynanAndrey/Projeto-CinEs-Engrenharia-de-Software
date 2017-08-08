let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let config = require('./config');
let session = require('express-session');

let cors = require('cors');
let app = express();

app.use(cors());

mongoose.connect('mongodb://localhost:27017/cines',function(err,db){
  if(err) {
    console.log("erro: " + err);
  } else {
    console.log("Conectou no db");
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let intermediadorDeRotas = require('./intermediadorDeRotas/intermediadorDeRotas');
let intermediadorLogin = require('./intermediadorDeRotas/intermediadorLogin');
intermediadorDeRotas.set(app);
intermediadorLogin.set(app);

app.listen(8080, function(){
  console.log("Servidor está correndo na porta 8080");
});

app.set('superSecret', config.secret);
app.use(morgan('dev'));


app.use(session({
  genid: function(req) {
    return 1;
  },
  secret: 'keyboard cat'
}));

module.exports = app;//NOPMD
