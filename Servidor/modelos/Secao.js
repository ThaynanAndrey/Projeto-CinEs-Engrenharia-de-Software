let mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * Esquema contendo atributos e relações da Secao
 */
let secaoSchema = new Schema({	
	horario: {
		type:Date,
		required:true
	},
	sala: {
		type: {
			type: mongoose.Schema.ObjectId,
			ref: 'Sala'
		}
	},
	filme: {
		type: { 
			type:  mongoose.Schema.ObjectId,
			ref: 'Filme'
		}
	}
});

let secao = mongoose.model('Secao', secaoSchema);

module.exports = secao;