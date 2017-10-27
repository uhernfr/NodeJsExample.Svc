/*Arquivo de Rotas - Recebe sever em app*/
module.exports = function(app) {
  var objReceita = require('../api/receitas/receitaService');
  var objConta = require('../api/contas/contaService');

  // Receitas 
  app.route('/api/receitas')
    .get(objReceita.list_receitas);
    
  app.route('/api/receitas/:id')
     .get(objReceita.get)
     .post(objReceita.post)
     .put(objReceita.put)
     .delete(objReceita.delete);


  // Contas
  app.route('/api/contas')
  .get(objConta.list_contas);

  app.route('/api/contas/:id')
  .get(objConta.get)

};