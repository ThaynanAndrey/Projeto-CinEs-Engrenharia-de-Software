let express = require('express');
let ingressoRouter = express.Router();
let ingresso = require('../modelos/Ingresso.js');

ingressoRouter.get('', function(req, res) {
  console.log("ingresso_get");
});
ingressoRouter.get('/:id', function(req, res) {
  console.log("ingresso_get_id");
});
ingressoRouter.post('', function(req, res) {
  console.log("ingresso_post");
});
ingressoRouter.delete('/:id', function(req, res) {
  console.log("ingresso_delete_id");
});
ingressoRouter.put('/:id', function(req, res) {
  console.log("ingresso_put_id");
});


module.exports = ingressoRouter;