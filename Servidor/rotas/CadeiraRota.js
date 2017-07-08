let express = require('express');
let cadeiraRouter = express.Router();
let Cadeira = require('../modelos/Cadeira.js');

cadeiraRouter.get('', function(req, res) {
  Cadeira.find({}, function(err, data) {
		if (err) {
			res.sendStatus(500);
		} else {
			res.json(data);
		}
	});
});
cadeiraRouter.get('/:id', function(req, res) {
  var idCadeira = { _id: req.params.id };

	Cadeira.findOne(idCadeira, function(err, data) {
		if (err || data == null) {
			res.sendStatus(404);
		} else {
			res.json(data);
		}
	});
});
cadeiraRouter.post('', function(req, res) {
  var novaCadeira = new Cadeira(req.body);

	novaCadeira.save(function(err, data) {

		console.log(data);

		if (err) {
			res.status(400).json(err);
		} else {
			res.status(201).json(data);
		}
	});
});
cadeiraRouter.delete('/:id', function(req, res) {
  var idCadeira = { _id: req.params.id };

	Cadeira.remove(idCadeira, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});
cadeiraRouter.put('/:id', function(req, res) {
  var idCadeira = { _id: req.params.id };
	var modelo = req.body;
	delete modelo._id;

	Cadeira.update(idCadeira, modelo, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});

module.exports = cadeiraRouter;