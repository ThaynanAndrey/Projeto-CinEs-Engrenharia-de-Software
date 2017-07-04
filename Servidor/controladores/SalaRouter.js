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
  console.log("sala_get_id");
});
salaRouter.post('', function(req, res) {
  console.log("sala_post");
});
salaRouter.delete('/:id', function(req, res) {
  console.log("sala_delete_id");
});
salaRouter.put('/:id', function(req, res) {
  console.log("sala_put_id");
});

module.exports = salaRouter;