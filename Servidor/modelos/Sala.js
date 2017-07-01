let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let salaSchema = new Schema({
	numeracao: {
		type:Number,
		required:true
	},
	cadeiras: {
		type:[String]
	}
});

let sala = mongoose.model('Sala',salaSchema);

module.exports = sala;