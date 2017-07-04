let express = require('express');
let filmeRouter = express.Router();
let Filme = require('../modelos/Filme.js');

filmeRouter.get('', function(req, res) {
  Filme.find({}, function(err, data) {
		if (err) {
			res.sendStatus(500);
		} else {
			res.json(data);
		}
	});
});
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