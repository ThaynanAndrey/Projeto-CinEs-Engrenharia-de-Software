let express = require('express');
let salaRouter = express.Router();
let Sala = require('../modelos/Sala.js');

salaRouter.get('', function(req, res) {
  Sala.find({}, function(err, data) {
		if (err) {
			res.sendStatus(500);
		} else {
			res.json(data);
		}
	});
});

salaRouter.get('/:id', function(req, res) {
  var idSala = { _id: req.params.id };

	Sala.findOne(idSala, function(err, data) {
		if (err || data == null) {
			res.sendStatus(404);
		} else {
			res.json(data);
		}
	});
});

salaRouter.post('', function(req, res) {
  var novaSala = new Sala(req.body);

	novaSala.save(function(err, data) {

		console.log(data);

		if (err) {
			res.status(400).json(err);
		} else {
			res.status(201).json(data);
		}
	});
});

salaRouter.delete('/:id', function(req, res) {
  var idSala = { _id: req.params.id };

	Sala.remove(idSala, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});

salaRouter.put('/:id', function(req, res) {
  var idSala = { _id: req.params.id };
	var modelo = req.body;
	delete modelo._id;

	Sala.update(idSala, modelo, function(err, data) {
		if (err) {
			res.status(400).json(err);
		} else {
			res.json(data);
		}
	});
});

module.exports = salaRouter;
