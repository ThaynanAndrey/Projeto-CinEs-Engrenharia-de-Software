let express = require('express');
let cadeiraRouter = express.Router();
let cadeira = require('../modelos/Cadeira.js');

cadeiraRouter.get('', function(req, res) {
  console.log("cadeira_get");
});
cadeiraRouter.get('/:id', function(req, res) {
  console.log("cadeira_get_id");
});
cadeiraRouter.post('', function(req, res) {
  console.log("cadeira_post");
});
cadeiraRouter.delete('/:id', function(req, res) {
  console.log("cadeira_delete_id");
});
cadeiraRouter.put('/:id', function(req, res) {
  console.log("cadeira_put_id");
});

module.exports = cadeiraRouter;