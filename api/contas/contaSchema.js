var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contaSchema = new Schema({     
      descricao: { type: String, required: true },
      cor: { type: String, required: true },
      tipoConta: { type: String, required: true },
      saldo: { type: Number, required: true }
});
console.log("schema")
module.exports = mongoose.model('contas', contaSchema);