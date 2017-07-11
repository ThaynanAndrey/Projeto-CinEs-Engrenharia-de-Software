let express = require('express');
let filmeRouter = express.Router();
let Filme = require('../modelos/Filme.js');

/**
 * Requisicao get a rota da página que exibe os filmes
 */
filmeRouter.get('', function(req, res) {
  Filme.find({}, function(err, data) {
		if (err) {
			res.sendStatus(500);
		} else {
			res.json(data);
		}
	});
});

/**
 * Requisicao get a rota da página que exibe os filmes de acordo com o id recebido
 */
filmeRouter.get('/:id', function(req, res) {
  var idFilme = { _id: req.params.id };

	Filme.findOne(idFilme, function(err, data) {
		if (err || data == null) {
			res.sendStatus(404);
		} else {
			res.json(data);
		}
	});
});

/**
 * Requisicao post a rota da página que exibe os filmes
 */
filmeRouter.post('', function(req, res) {
  var novoFilme = new Filme(req.body);

	novoFilme.save(function(err, data) {

		console.log(data);

		if (err) {
			res.status(400).json(err);
		} else {
			res.status(201).json(data);
		}
	});
});

/**
 * Requisicao delete a rota da página que exibe os filmes de acordo com o id recebido
 */
filmeRouter.delete('/:id', function(req, res) {
  var idFilme = { _id: req.params.id };

	Filme.remove(idFilme, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});


/**
 * Requisicao put a rota da página que exibe os filmes de acordo com o id recebido
 */
filmeRouter.put('/:id', function(req, res) {
  var idFilme = { _id: req.params.id };
	var modelo = req.body;
	delete modelo._id;

	Filme.update(idFilme, modelo, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});

module.exports = filmeRouter;