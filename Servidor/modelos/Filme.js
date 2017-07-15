let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * Esquema contendo atributos e relações do Filme
 */
let filmeSchema = new Schema({
	nome: {
		type:String,
		required:true
	},
	sala: {
		type:  Number,
		required: true
	},
	sessoes: [{
		_id: false,
		horario: {
			type: Date
		},

		cadeiras: [{
			numeracao: Number,
			disponivel: Boolean,
			selecionada: Boolean
		}],
		cadeirasOcupadas: {
			type: Number,
			default: 0
		}
	}],
	genero: {
		type:String,
		required:true
	},
	classificacao: {
		type:String,
		required:true
	},
	sinopse: {
		type:String,
		required:true
	},
	tempoDeDuracao: {
		type:String,
		required:true
	},
	imagem:{
		type: String
	}
}, { strict: false });

let filme = mongoose.model('Filme', filmeSchema);

module.exports = filme;
