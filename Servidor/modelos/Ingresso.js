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
		type: {
			type:  mongoose.Schema.ObjectId,
			ref: 'Filme'
		}
	},
	usuario: {
		type: {
			type:  mongoose.Schema.ObjectId,
			ref: 'Usuario'
		}
	}
});

let ingresso = mongoose.model('Ingresso', ingressoSchema);

module.exports = ingresso;
