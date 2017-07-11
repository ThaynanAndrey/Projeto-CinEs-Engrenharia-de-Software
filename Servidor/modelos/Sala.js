let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * Esquema contendo atributos e relações da Sala
 */
let salaSchema = new Schema({
	numeracao: {
		type:Number,
		required:true
	},
	cadeiras: {
		type:[{
				type:mongoose.Schema.ObjectId,
				ref: 'Cadeira' 
			}]
	},
	sessao: {
		type: { 
			type:  mongoose.Schema.ObjectId,
			ref: 'Sessao'
		}
	}
});

let sala = mongoose.model('Sala', salaSchema);

module.exports = sala;