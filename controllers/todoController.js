const Todo = require("../models/todo");

const todoController = {
  getAllTodos: (req, res) => {
    Todo.find({})
      .then(todo => {
        res.render("todos", { data: todo });
      })
      .catch(err => res.status(400).json(err));
  },
  addTodo: (req, res) => {
    const todo = req.body;
    console.log(todo);
    Todo.create(todo).then(todo => {
      console.log(todo);
      res.send('/todos');
    }).catch(err => res.status(400).json(err));
  },
  updateTodo: (req, res) => {
    const todoId = req.params.todo;
    const updateTodo = req.body;
    console.log(todoId);
    console.log(updateTodo);
    Todo.findByIdAndUpdate({ _id:todoId }, updateTodo).then(updateTodo => {
      res.send('/todos');
    }).catch(err => res.status(400).json(err));
  },
  removeTodo: (req, res) => {
    const todoId = req.params.todo;
    console.log('remove hit');
    console.log(todoId);
    Todo.findByIdAndRemove(todoId).then(deletedTodo => {
      console.log('Inside find and remove');
      res.send('/todos');
    }).catch(err => res.status(400).json(err));
  }
};

module.exports = todoController;
