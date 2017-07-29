let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let cors = require('cors');
let app = express();
//let intermediadorDeRotas = require('./intermediadorDeRotas/intermediadorDeRotas');

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
intermediadorDeRotas.set(app);

//intermediadorDeRotas.set(app);

app.listen(8080, function(){
  console.log("Servidor está correndo na porta 8080");
});




/////////////////////////////////////////////////////////////

var jwt = require('jsonwebtoken');
var morgan = require('morgan');
var Usuario = require('./modelos/Usuario.js');
var apiRoutes = express.Router();
var config = require('./config');
var session = require('express-session');

app.set('superSecret', config.secret);
app.use(morgan('dev'));


app.use(session({
  genid: function(req) {
    return 1;
  },
  secret: 'keyboard cat'
}));



apiRoutes.post('/authenticate', function(req, res) {


  Usuario.findOne({ email: req.body.email }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Usuario não encontrado' });
    } else if (user) {


      if (user.senha != req.body.password) {
        res.json({ success: false, message: 'Senha Invalida' });
      } else {

        // cria o token
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresIn: 86400 // expires in 24 hours
        });

        res.json({
          usuario: user,
          success: true,
          message: 'Aqui o token!',
          token: token
        });


      }

    }

  });
});

apiRoutes.get('/logout', function(req, res){
  // destroy the user's session to log them out
  // will be re-created next request
  req.session.destroy(function(){
    res.json({
      success: true
    });
  });
});

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
/*
apiRoutes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.param('token') || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {

        req.decoded = decoded;
        next();
      }
    });

  } else {

    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }

});

app.use('/api', apiRoutes);

*/
app.use('/api', apiRoutes);


module.exports = app;
