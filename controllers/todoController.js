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

module.exports = data;
