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
	}
});

let cadeira = mongoose.model('Cadeira',cadeiraSchema);

module.exports = cadeira;