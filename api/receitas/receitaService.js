//console.log("service")
var mongoose = require('mongoose'),
Receita = require('./receitaSchema');

exports.list_receitas = function(req, res) {
    Receita.find({}, function(err, task) {
  if (err)
    res.send(err);
  res.json(task);
});
};

exports.get = function(req, res) {
    Receita.findById(req.params.id, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  

exports.post = function(req, res) {
    var new_task = new Receita(req.body);
    new_task.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };   
 
  
  exports.put = function(req, res) {       
    Receita.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
  
  exports.delete = function(req, res) { 
  
    Receita.remove({
      _id: req.params.id
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Receita excluida com sucesso.' });
    });
  };
  
  
  