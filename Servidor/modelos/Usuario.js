let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * Esquema contendo atributos e relações do Usuário
 */
let usuarioSchema = new Schema({
	nome: {
		type:String,
		required:true
	},
	email: {
		type:String,
		required:true
	},
	senha: {
		type:String,
		required:true
	},
	cpf:{
		type:String,
		required:true
	},
	ingressos: {
		type:[{
				type:  mongoose.Schema.ObjectId,
				ref: 'Ingresso'
			}]
	}
}, { strict: false });

let usuario = mongoose.model('Usuario',usuarioSchema);

module.exports = usuario;//NOPMD
