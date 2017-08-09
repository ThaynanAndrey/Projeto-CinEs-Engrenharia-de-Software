let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let config = require('./config');
let session = require('express-session');

let cors = require('cors');
let app = express();

const port = process.env.PORT || 8080;

app.use(cors());

mongoose.connect('mongodb://rafael:rafael@ds129600.mlab.com:29600/cines',function(err,db){
  if(err) {
    console.log("erro: " + err);
  } else {
    console.log("Conectou no db");
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("Cliente"))

let intermediadorDeRotas = require('./intermediadorDeRotas/intermediadorDeRotas');
let intermediadorLogin = require('./intermediadorDeRotas/intermediadorLogin');
intermediadorDeRotas.set(app);
intermediadorLogin.set(app);

app.listen(port, function(){
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
