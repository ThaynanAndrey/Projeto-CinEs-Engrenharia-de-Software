let express = require('express');
let usuarioRouter = express.Router();
let Usuario = require('../modelos/Usuario.js');

/**
 * Requisicao get a rota da página do usuario
 */
usuarioRouter.get('', function(req, res) {
  let query = Usuario.find({}).populate('ingressos');

  query.exec(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

/**
 * Requisicao get a rota da página do usuario de acordo com o id recebido
 */
usuarioRouter.get('/:id', function(req, res) {
  let query = Usuario.findById(req.params.id).populate('ingressos');
  console.log(query);

	query.exec(function(err, data) {
		if (err || data == null) {
			res.sendStatus(404);
		}
		else{
			res.json(data);
		}
	});
});


/**
 * Requisicao post a rota da página do usuario
 */
usuarioRouter.post('', function(req, res) {
  var novoUsuario = new Usuario(req.body);

	novoUsuario.save(function(err, data) {

		console.log(data);

		if (err) {
			res.status(400).json(err);
		} else {
			res.status(201).json(data);
		}
	});
});

/**
 * Requisicao delete a rota da página do usuario de acordo com o id recebido
 */
usuarioRouter.delete('/:id', function(req, res) {
  var idUsuario = { _id: req.params.id };

	Usuario.remove(idUsuario, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});

/**
 * Requisicao put a rota da página do usuario de acordo com o id recebido
 */
usuarioRouter.put('/:id', function(req, res) {
  var idUsuario = { _id: req.params.id };
	var modelo = req.body;
	delete modelo._id;

	Usuario.update(idUsuario, modelo, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(modelo);
		}
	});
});

module.exports = usuarioRouter;
