let express = require('express');
let filmeRouter = express.Router();
let filmes = require('../modelos/Filme.js');

filmeRouter.get('', function(req, res) {
  console.log("filmes_get");
});
filmeRouter.get('/:id', function(req, res) {
  console.log("filmes_get_id");
});
filmeRouter.post('', function(req, res) {
  console.log("filmes_post");
});
filmeRouter.delete('/:id', function(req, res) {
  console.log("filmes_delete_id");
});
filmeRouter.put('/:id', function(req, res) {
  console.log("filmes_put_id");
});

module.exports = filmeRouter;