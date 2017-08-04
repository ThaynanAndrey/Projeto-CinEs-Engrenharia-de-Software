let express = require('express');
let loginRouter = express.Router();
let Usuario = require('../modelos/Usuario.js');
let jwt = require('jsonwebtoken');

intermediadorLogin = {};

intermediadorLogin.set = function set(app){

  app.post('/api/authenticate', function(req, res) {

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
}

module.exports = intermediadorLogin;
