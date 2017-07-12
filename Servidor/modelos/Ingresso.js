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
	isMeiaEntrada: {
		type:Boolean
	},
	cadeira: {
		type: { 
			type:  mongoose.Schema.ObjectId,
			ref: 'Cadeira'
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