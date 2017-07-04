let express = require('express');
let secaoRouter = express.Router();
let Secao = require('../modelos/Secao.js');

secaoRouter.get('', function(req, res) {
  Secao.find({}, function(err, data) {
		if (err) {
			res.sendStatus(500);
		} else {
			res.json(data);
		}
	});
});
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
