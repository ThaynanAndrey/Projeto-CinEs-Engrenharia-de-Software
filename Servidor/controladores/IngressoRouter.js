let express = require('express');
let ingressoRouter = express.Router();
let Ingresso = require('../modelos/Ingresso.js');

ingressoRouter.get('', function(req, res) {
  Ingresso.find({}, function(err, data) {
		if (err) {
			res.sendStatus(500);
		} else {
			res.json(data);
		}
	});
});
ingressoRouter.get('/:id', function(req, res) {
  var idIngresso = { _id: req.params.id };

	Ingresso.findOne(idIngresso, function(err, data) {
		if (err || data == null) {
			res.sendStatus(404);
		} else {
			res.json(data);
		}
	});
});
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
ingressoRouter.put('/:id', function(req, res) {
  var idIngresso = { _id: req.params.id };
	var modelo = req.body;
	delete modelo._id;

	Ingresso.update(idIngresso, modelo, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});


module.exports = ingressoRouter;