var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var receitaSchema = new Schema({
      data: { type: String, required: true },
      descricao: { type: String, required: true },
      categoria: { type: String, required: true },
      conta: { type: String, required: true },
      valor: { type: String, required: true }
});
console.log("schema")
module.exports = mongoose.model('receitas', receitaSchema);