intermediadorDeRotas = {};

let filmeRota = require('../rotas/FilmeRota.js');
let usuarioRota = require('../rotas/UsuarioRota.js');
let cadeiraRota = require('../rotas/CadeiraRota.js');
let ingressoRota = require('../rotas/IngressoRota.js');
let salaRota = require('../rotas/SalaRota.js');

/**
 * Configura a o sistema gerenciando as rotas de cada uma das requisições
 *
 * @param {Object} app - Objeto que encapsula a aplicação Express
 */
intermediadorDeRotas.set = function set(app){
	app.use('/filme', filmeRota);
	app.use('/usuario', usuarioRota);
	app.use('/cadeira', cadeiraRota);
	app.use('/ingresso', ingressoRota);
	app.use('/sala', salaRota);
}

module.exports = intermediadorDeRotas;