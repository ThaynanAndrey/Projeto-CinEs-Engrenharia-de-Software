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
	sessoes: [{
			horario:{
				type:String,
				required:true
				},

			sala:{
				type: mongoose.Schema.ObjectId,
				ref: 'Sala'
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
});

let filme = mongoose.model('Filme', filmeSchema);

module.exports = filme;