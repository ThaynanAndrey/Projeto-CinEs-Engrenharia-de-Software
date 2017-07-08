let express = require('express');
let usuarioRouter = express.Router();
let Usuario = require('../modelos/Usuario.js');

usuarioRouter.get('', function(req, res) {
  Usuario.find({}, function(err, data) {
		if (err) {
			res.sendStatus(500);
		} else {
			res.json(data);
		}
	});
});
usuarioRouter.get('/:id', function(req, res) {
  var idUsuario = { _id: req.params.id };

	Usuario.findOne(idUsuario, function(err, data) {
		if (err || data == null) {
			res.sendStatus(404);
		} else {
			res.json(data);
		}
	});
});
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
usuarioRouter.put('/:id', function(req, res) {
  var idUsuario = { _id: req.params.id };
	var modelo = req.body;
	delete modelo._id;

	Usuario.update(idUsuario, modelo, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});

module.exports = usuarioRouter;
