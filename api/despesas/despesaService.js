

//console.log("service")
/* GET despesas. */
var despesa = require('./despesaSchema');
despesa.methods(['get','post','put','delete'])


module.exports = despesa