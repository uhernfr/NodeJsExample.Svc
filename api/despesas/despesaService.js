//console.log("service")
var mongoose = require('mongoose'),
Despesa = require('./DespesaSchema');

exports.list_despesas = function(req, res) {
    Despesa.find({}, function(err, task) {
  if (err)
    res.send(err);
  res.json(task);
});
};

exports.get = function(req, res) {
    Despesa.findById(req.params.id, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  

exports.post = function(req, res) {
    var new_task = new Despesa(req.body);
    new_task.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };   
 
  
  exports.put = function(req, res) {       
    Despesa.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
  
  exports.delete = function(req, res) { 
  
    Despesa.remove({
      _id: req.params.id
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Despesa excluida com sucesso.' });
    });
  };
  
  
  