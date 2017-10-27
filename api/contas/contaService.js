
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

// exports.create_a_task = function(req, res) {
//     var new_task = new Task(req.body);
//     new_task.save(function(err, task) {
//       if (err)
//         res.send(err);
//       res.json(task);
//     });
//   };  
  
  
//   exports.update_a_task = function(req, res) {
//     Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//       if (err)
//         res.send(err);
//       res.json(task);
//     });
//   };
  
  
//   exports.delete_a_task = function(req, res) {
  
  
//     Task.remove({
//       _id: req.params.taskId
//     }, function(err, task) {
//       if (err)
//         res.send(err);
//       res.json({ message: 'Task successfully deleted' });
//     });
//   };