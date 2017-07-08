let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let cadeiraSchema = new Schema({
	numeracao: {
		type:Number,
		required:true
	},
	disponivel: {
		type:Boolean,
		required:true
	},
	ingresso: {
		type: { 
			type:  mongoose.Schema.ObjectId,
			ref: 'Ingresso'
		}
	},
	sala: {
		type: { 
			type:  mongoose.Schema.ObjectId,
			ref: 'Sala'
		}
	}
});

let cadeira = mongoose.model('Cadeira', cadeiraSchema);

module.exports = cadeira;