var express = require('express');
var router = express.Router();
var filmes = require('../modelos/Filme');

// define the about route
router.get('/filmes', function(req, res) {
  console.log("ASDADSASDSAD");
});

module.exports = router;