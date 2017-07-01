let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ingressoSchema = new Schema({
	qrCode: {
		type:String,
		required:true
	},
	isMeiaEntrada: {
		type:Boolean
	}
});

let ingresso = mongoose.model('Ingresso',ingressoSchema);

module.exports = ingresso;