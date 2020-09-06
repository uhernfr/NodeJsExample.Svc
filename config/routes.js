/*Arquivo de Rotas - Recebe sever em app*/
module.exports = function(app) {
  var objConta = require('../api/contas/contaService');
  var objReceita = require('../api/receitas/receitaService');
  var objDespesa = require('../api/despesas/despesaService');
  

  // Receitas 
  app.route('/api/receitas')
    .get(objReceita.list_receitas)
    .post(objReceita.post);
    
  app.route('/api/receitas/:id')
     .get(objReceita.get)     
     .put(objReceita.put)
     .delete(objReceita.delete);

//Despesas
   app.route('/api/despesas')
     .get(objDespesa.list_despesas)
     .post(objDespesa.post);
     
   app.route('/api/despesas/:id')
      .get(objDespesa.get)      
      .put(objDespesa.put)
      .delete(objDespesa.delete);
 


  // Contas
  app.route('/api/contas')
  .get(objConta.list_contas)
  .post(objConta.post);

  app.route('/api/contas/:id')
  .get(objConta.get)
  .put(objConta.put)
  .delete(objConta.delete);

};