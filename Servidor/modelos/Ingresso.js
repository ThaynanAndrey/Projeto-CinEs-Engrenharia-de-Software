let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * Esquema contendo atributos e relações do Ingresso
 */
let ingressoSchema = new Schema({
	qrCode: {
		type:String,
		required: true
	},
	numeroDaCadeira: {
		type:Number,
		required: true
	},
	filme: {
			type: mongoose.Schema.ObjectId,
			ref: 'Filme'
	}
}, { strict: false });

let ingresso = mongoose.model('Ingresso', ingressoSchema);

module.exports = ingresso;
