let express = require('express');
let usuarioRouter = express.Router();
let usuario = require('../modelos/Usuario.js');

usuarioRouter.get('', function(req, res) {
  console.log("usuario_get");
});
usuarioRouter.get('/:id', function(req, res) {
  console.log("usuario_get_id");
});
usuarioRouter.post('', function(req, res) {
  console.log("usuario_post");
});
usuarioRouter.delete('/:id', function(req, res) {
  console.log("usuario_delete_id");
});
usuarioRouter.put('/:id', function(req, res) {
  console.log("usuario_put_id");
});

module.exports = usuarioRouter;