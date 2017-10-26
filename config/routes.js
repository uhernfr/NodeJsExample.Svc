const express = require('express')

module.exports = function(server) {

  // API Routes
  const router = express()
  server.use('/api', router)

  // rotas da API


  const receitaService = require('../api/receitas/receitaService')
  receitaService.register(router, '/receitas')

 // const contaService = require('../api/contas/contaService')
 // contaService.register(router, '/contas')

  console.log("Routes...")

  
}
