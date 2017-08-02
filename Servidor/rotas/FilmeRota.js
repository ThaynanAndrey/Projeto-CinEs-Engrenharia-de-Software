let express = require('express');
let filmeRouter = express.Router();
let Filme = require('../modelos/Filme.js');

/**
 * Requisicao get a rota da página que exibe os filmes
 */
filmeRouter.get('/', function(req, res) {
	let query = Filme.find({});
  	query.exec(function(err, data) {
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
	let query = Filme.findById(req.params.id);

	query.exec(function(err, data) {
		if (err || data == null) {
			res.sendStatus(404);
		}
		else{
			console.log("Filme e tal e pa: "+ data);
				res.json(data);
		}
	});
});

/**
 * Requisicao post a rota da página que exibe os filmes
 */
filmeRouter.post('/', function(req, res) {
  	let novoFilme = new Filme(req.body);

  	let validacao = novoFilme.validateSync();

	/**if (validacao){
		let erro = Object.values(validacao.errors)[0];
        return errosUtil.erroRest(400, erro.message, erro, res);
	}**/

	novoFilme.save(function(err, data) {
		if (err) {
			return res.status(400).json(err);
		}
		res.status(201).json(data);
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

	Filme.update(idFilme, modelo, function(err, data) {
		if (err) {
			return res.status(400).json(err);
		}
		res.json(modelo);
	});
});

module.exports = filmeRouter;
