

//console.log("service")
/* GET contas. */
var conta = require('./contaSchema');
conta.methods(['get','post','put','delete']);


module.exports = conta