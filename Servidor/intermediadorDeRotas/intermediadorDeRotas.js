intermediadorDeRotas = {};

let filmeRota = require('../rotas/FilmeRota.js');
let usuarioRota = require('../rotas/UsuarioRota.js');
let ingressoRota = require('../rotas/IngressoRota.js');
let salaRota = require('../rotas/SalaRota.js');

/**
 * Configura a o sistema gerenciando as rotas de cada uma das requisições
 *
 * @param {Object} app - Objeto que encapsula a aplicação Express
 */
intermediadorDeRotas.set = function set(app){
	app.use('/api/filme', filmeRota);
	app.use('/api/usuario', usuarioRota);
	app.use('/api/ingresso', ingressoRota);
	app.use('/api/sala', salaRota);
}

module.exports = intermediadorDeRotas;