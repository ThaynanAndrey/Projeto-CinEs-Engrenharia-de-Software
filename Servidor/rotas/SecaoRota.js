let express = require('express');
let secaoRouter = express.Router();
let Secao = require('../modelos/Secao.js');

/**
 * Requisicao get a rota da página da secao
 */
secaoRouter.get('', function(req, res) {
  Secao.find({}, function(err, data) {
		if (err) {
			res.sendStatus(500);
		} else {
			res.json(data);
		}
	});
});

/**
 * Requisicao get a rota da página da secao de acordo com o id recebido
 */
secaoRouter.get('/:id', function(req, res) {
  var idSecao = { _id: req.params.id };

	Secao.findOne(idSecao, function(err, data) {
		if (err || data == null) {
			res.sendStatus(404);
		} else {
			res.json(data);
		}
	});
});

/**
 * Requisicao post a rota da página da secao
 */
secaoRouter.post('', function(req, res) {
  var novaSecao = new Secao(req.body);

	novaSecao.save(function(err, data) {

		console.log(data);

		if (err) {
			res.status(400).json(err);
		} else {
			res.status(201).json(data);
		}
	});
});

/**
 * Requisicao delete a rota da página da secao de acordo com o id recebido
 */
secaoRouter.delete('/:id', function(req, res) {
  var idSecao = { _id: req.params.id };

	Secao.remove(idSecao, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});

/**
 * Requisicao put a rota da página da secao de acordo com o id recebido
 */
secaoRouter.put('/:id', function(req, res) {
  var idSecao = { _id: req.params.id };
	var modelo = req.body;
	delete modelo._id;

	Secao.update(idSecao, modelo, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});

module.exports = secaoRouter;
