let express = require('express');
let salaRouter = express.Router();
let sala = require('../modelos/Sala.js');

salaRouter.get('', function(req, res) {
  console.log("sala_get");
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