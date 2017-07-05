let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let filmeSchema = new Schema({
	nome: {
		type:String,
		required:true
	},
	secoes: {
		type:[{ type: Schema.Types.ObjectId, ref: 'Secao' }]
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

let filme = mongoose.model('Filme',filmeSchema);

module.exports = filme;