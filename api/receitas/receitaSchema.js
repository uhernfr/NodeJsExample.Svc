const restful = require('node-restful')
const mongoose = restful.mongoose

const receitaSchema = new mongoose.Schema({
  data: { type: String, required: true },
  descricao: { type: String, required: true },
  categoria: { type: String, required: true },
  conta: { type: String, required: true },
  valor: { type: String, required: true }

})

module.exports = restful.model('receitaSchema', receitaSchema)

