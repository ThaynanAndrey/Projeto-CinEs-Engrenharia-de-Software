intermediadorDeRotas = {};

let filmeRota = require('../rotas/FilmeRota.js');
let usuarioRota = require('../rotas/UsuarioRota.js');
let cadeiraRota = require('../rotas/CadeiraRota.js');
let ingressoRota = require('../rotas/IngressoRota.js');
let salaRota = require('../rotas/SalaRota.js');
let secaoRota = require('../rotas/SecaoRota.js');

intermediadorDeRotas.set = function set(app){
	app.use('/filme', filmeRota);
	app.use('/usuario', usuarioRota);
	app.use('/cadeira', cadeiraRota);
	app.use('/ingresso', ingressoRota);
	app.use('/sala', salaRota);
	app.use('/secao', secaoRota);
}

module.exports = intermediadorDeRotas;