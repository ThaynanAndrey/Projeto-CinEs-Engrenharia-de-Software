
routerMiddleware = {};

let filmeRouter = require('../controladores/FilmeRouter.js');
let usuarioRouter = require('../controladores/UsuarioRouter.js');
let cadeiraRouter = require('../controladores/CadeiraRouter.js');
let ingressoRouter = require('../controladores/IngressoRouter.js');
let salaRouter = require('../controladores/SalaRouter.js');
let secaoRouter = require('../controladores/SecaoRouter.js');

routerMiddleware.set = function set(app){
	app.use('/filme', filmeRouter);
	app.use('/usuario', usuarioRouter);
	app.use('/cadeira', cadeiraRouter);
	app.use('/ingresso', ingressoRouter);
	app.use('/sala', salaRouter);
	app.use('/secao', secaoRouter);
}

module.exports = routerMiddleware;