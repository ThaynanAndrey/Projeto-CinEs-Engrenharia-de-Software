let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * Esquema contendo atributos e relações da Sala
 */
let salaSchema = new Schema({
	numeracao: {
		type:Number,
		required:[true, 'Você deve preencher a numeração da sala'],
		unique : true
	},
	qtdCadeiras: {
		type: Number,
		required: [true, 'Você deve informar a quantidade de cadeiras disponíveis']
	}
});

let sala = mongoose.model('Sala', salaSchema);

module.exports = sala;