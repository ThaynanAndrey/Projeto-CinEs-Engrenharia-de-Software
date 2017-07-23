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

app.set('superSecret', config.secret); 
app.use(morgan('dev'));


apiRoutes.post('/authenticate', function(req, res) {

  // find the user
  Usuario.findOne({ email: req.body.email }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Usuario não encontrado' });
    } else if (user) {

      // check if password matches
      if (user.senha != req.body.password) {
        res.json({ success: false, message: 'Senha Invalida' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresIn: 86400 // expires in 24 hours
        });

        res.json({
          success: true,
          message: 'Aqui o token!',
          token: token
        });
      }   

    }

  });
});

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
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
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;  
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
      success: false, 
      message: 'No token provided.'
    });
    
  }
  
});

// ---------------------------------------------------------
// authenticated routes
// ---------------------------------------------------------

// exemplo 
// pra axessar essa rota coloca no header key  x-access-token , e no valor o token gerado na autenticacao

apiRoutes.get('/check', function(req, res) {
 res.json(req.decoded);
});


app.use('/api', apiRoutes);



let intermediadorDeRotas = require('./intermediadorDeRotas/intermediadorDeRotas');
intermediadorDeRotas.set(app);

module.exports = app;