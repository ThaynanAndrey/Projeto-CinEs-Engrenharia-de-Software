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
	secoes: {
		type:[{ 
				type:  mongoose.Schema.ObjectId,
				ref: 'Secao'
			}]
	},
	genero: {
		type:String,
		required:true
	},
	classificacao: {
		type:Number,
		required:true
	},
	sinopse: {
		type:String,
		required:true
	},
	tempoDeDuracao: {
		type:Number,
		required:true
	},
	imagem:{
		type: String
	}
});

let filme = mongoose.model('Filme', filmeSchema);

module.exports = filme;