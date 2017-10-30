var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DespesaSchema = new Schema({
      data: { type: Date, required: true },
      descricao: { type: String, required: true },
      categoria: { type: String, required: true },
      conta: { type: String, required: true },
      flgPaga: { type: Boolean, required: true },
      valor: { type: Number, required: true }
});
console.log("schema")
module.exports = mongoose.model('despesas', DespesaSchema);

