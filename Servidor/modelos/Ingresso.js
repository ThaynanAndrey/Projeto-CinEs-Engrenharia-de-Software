let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ingressoSchema = new Schema({
	qrCode: {
		type:String,
		required:true
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