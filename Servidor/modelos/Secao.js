let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let secaoSchema = new Schema({
	horario: {
		type:Date,
		required:true
	},
	sala: {
		type:{type: mongoose.Schema.Types.ObjectId, ref: 'Sala'},
		required:true
	}
});

let secao = mongoose.model('Secao',secaoSchema);

module.exports = secao;