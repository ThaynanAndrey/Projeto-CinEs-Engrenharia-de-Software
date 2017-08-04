let express = require('express');
let ingressoRouter = express.Router();
let Ingresso = require('../modelos/Ingresso.js');

/**
 * Requisicao get a rota da página dos ingressos
 */
ingressoRouter.get('', function(req, res) {
  let query = Ingresso.find({}).populate('filme');

  query.exec(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

/**
 * Requisicao get a rota da página dos ingressos de acordo com o id recebido
 */
ingressoRouter.get('/:id', function(req, res) {
  let query = Ingresso.findById(req.params.id).populate('filme');

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
 * Requisicao post a rota da página dos ingressos
 */
ingressoRouter.post('', function(req, res) {
  var novoIngresso = new Ingresso(req.body);

	novoIngresso.save(function(err, data) {

		console.log(data);

		if (err) {
			res.status(400).json(err);
		} else {
			res.status(201).json(data);
		}
	});
});

/**
 * Requisicao delete a rota da página dos ingressos de acordo com o id recebido
 */
ingressoRouter.delete('/:id', function(req, res) {
  var idIngresso = { _id: req.params.id };

	Ingresso.remove(idIngresso, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});

/**
 * Requisicao put a rota da página dos ingressos de acordo com o id recebido
 */
ingressoRouter.put('/:id', function(req, res) {
  var idIngresso = { _id: req.params.id };
	var modelo = req.body;
	delete modelo._id;

	Ingresso.update(idIngresso, modelo, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(modelo);
		}
	});
});


module.exports = ingressoRouter;
