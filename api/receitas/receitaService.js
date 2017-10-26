

//console.log("service")
/* GET receitas. */
var receita = require('./receitaSchema');
receita.methods(['get','post','put','delete'])


module.exports = receita