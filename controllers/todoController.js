const Todo = require('../models/todo');

const data = {
  appName: "Express it todos",
  todos: ["Do something", "Do something Pt 2"],
  addTodo: function(todo) {
    this.todos.push(todo);
  },
  removeTodo: function(todo) {
    this.todos.forEach((currentTodo, index) => {
      if (currentTodo === todo) {
        console.log("delete hit");
        this.todos.splice(index, 1);
      }
    });
  },
  updateTodo: function(todo, updateTodo) {
    this.todos.forEach((currentTodo, index) => {
      if (currentTodo === todo) {
        console.log("update hit");
        console.log(todo);
        console.log(currentTodo);
        this.todos[index] = updateTodo;
        console.log(currentTodo);
      }
    });
  }
};

const todoController = {
  appName: "Express it todos",
  todos: ["Do something", "Do something Pt 2"],
  addTodo: function(todo) {
    this.todos.push(todo);
  },
  removeTodo: function(todo) {
    this.todos.forEach((currentTodo, index) => {
      if (currentTodo === todo) {
        console.log("delete hit");
        this.todos.splice(index, 1);
      }
    });
  },
  updateTodo: function(todo, updateTodo) {
    this.todos.forEach((currentTodo, index) => {
      if (currentTodo === todo) {
        console.log("update hit");
        console.log(todo);
        console.log(currentTodo);
        this.todos[index] = updateTodo;
        console.log(currentTodo);
      }
    });
  },
  getAllTodos: function(req, res) {
    console.log('hit get all todo routes');
    let data = ["Do something", "Do something Pt 2"];

    // let tempData = {
    //   name: 'Chris',
    //   todo: 'Finnish Homework'
    // }

    Todo.find({}).then(todo => {
      console.log(todo);
      res.render('todos', { data: todo});
    }).catch(err => res.status(400).json(err));
    
  }
};



module.exports = todoController;
