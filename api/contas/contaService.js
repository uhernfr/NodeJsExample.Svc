
console.log("service")
var mongoose = require('mongoose'),
Conta = require('./contaSchema');

exports.list_contas = function(req, res) {
    Conta.find({}, function(err, task) {
  if (err)
    res.send(err);
  res.json(task);
});
};

exports.get = function(req, res) {
    Conta.findById(req.params.id, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  exports.post = function(req, res) {
    var new_task = new Conta(req.body);
    new_task.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };   
 
  
  exports.put = function(req, res) {       
    Conta.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
  
  exports.delete = function(req, res) {   
    Conta.remove({
      _id: req.params.id
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Conta excluida com sucesso.' });
    });
  };
  
  
  