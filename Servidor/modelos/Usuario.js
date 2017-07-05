let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
	nome: {
		type:String,
		required:true
	},
	email: {
		type:String,
		required:true
	},
	senha: {
		type:String,
		required:true
	},
	ingressos: {
		type:[{ type: Schema.Types.ObjectId, ref: 'Ingresso' }]
	}
});

let usuario = mongoose.model('Usuario',usuarioSchema);

module.exports = usuario;