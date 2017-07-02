let express = require('express');
let secaoRouter = express.Router();
let secao = require('../modelos/Secao.js');

secaoRouter.get('', function(req, res) {
  console.log("secao_get");
});
secaoRouter.get('/:id', function(req, res) {
  console.log("secao_get_id");
});
secaoRouter.post('', function(req, res) {
  console.log("secao_post");
});
secaoRouter.delete('/:id', function(req, res) {
  console.log("secao_delete_id");
});
secaoRouter.put('/:id', function(req, res) {
  console.log("secao_put_id");
});

module.exports = secaoRouter;