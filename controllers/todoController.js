const Todo = require("../models/todo");

// const data = {
//   appName: "Express it todos",
//   todos: ["Do something", "Do something Pt 2"],
//   addTodo: function(todo) {
//     this.todos.push(todo);
//   },
//   removeTodo: function(todo) {
//     this.todos.forEach((currentTodo, index) => {
//       if (currentTodo === todo) {
//         console.log("delete hit");
//         this.todos.splice(index, 1);
//       }
//     });
//   },
//   updateTodo: function(todo, updateTodo) {
//     this.todos.forEach((currentTodo, index) => {
//       if (currentTodo === todo) {
//         console.log("update hit");
//         console.log(todo);
//         console.log(currentTodo);
//         this.todos[index] = updateTodo;
//         console.log(currentTodo);
//       }
//     });
//   }
// };

const todoController = {
  // appName: "Express it todos",
  // todos: ["Do something", "Do something Pt 2"],
  // addTodo: function(todo) {
  //   this.todos.push(todo);
  // },
  // removeTodo: function(todo) {
  //   this.todos.forEach((currentTodo, index) => {
  //     if (currentTodo === todo) {
  //       console.log("delete hit");
  //       this.todos.splice(index, 1);
  //     }
  //   });
  // },
  // updateTodo: function(todo, updateTodo) {
  //   this.todos.forEach((currentTodo, index) => {
  //     if (currentTodo === todo) {
  //       console.log("update hit");
  //       console.log(todo);
  //       console.log(currentTodo);
  //       this.todos[index] = updateTodo;
  //       console.log(currentTodo);
  //     }
  //   });
  // },
  getAllTodos: (req, res) => {
    Todo.find({})
      .then(todo => {
        res.render("todos", { data: todo });
      })
      .catch(err => res.status(400).json(err));
  },
  addTodo: (req, res) => {
    const todo = req.body;
    Todo.create(todo).then(todo => {
      console.log(todo);
      res.redirect('/todos');
    }).catch(err => res.status(400).json(err));
  },
  updateTodo: (req, res) => {
    const todoId = req.params.todo;
    const updateTodo = req.body;
    console.log(todoId);
    console.log(updateTodo);
    Todo.findByIdAndUpdate({ _id:todoId }, updateTodo).then(updateTodo => {
      res.redirect('/todos');
    }).catch(err => res.status(400).json(err));
  },
  removeTodo: (req, res) => {
    const todoId = req.params.todo;
    console.log(todoId);
    Todo.findByIdAndRemove(todoId).then(deletedTodo => {
      res.redirect('/todos');
    }).catch(err => res.status(400).json(err));
  }
};

module.exports = todoController;
